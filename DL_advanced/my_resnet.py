import argparse
import torch
import torch.nn as nn
import torch.optim as optim
import torch.nn.functional as F
from torchvision import transforms, datasets

from module.model import CustomResNet
from module.util import seed_fix, load_data, train, evaluate, make_plot

import os
os.environ["CUDA_DEVICE_ORDER"]="PCI_BUS_ID"  # Arrange GPU devices starting from 0
os.environ["CUDA_VISIBLE_DEVICES"]= "0"  # Set the GPU 0 to use

USE_CUDA = torch.cuda.is_available()
DEVICE = torch.device("cuda" if USE_CUDA else "cpu")


SEED = 23

def parse_opt():
    parser = argparse.ArgumentParser(description='Custom ResNet Training')
    parser.add_argument('--exp_name', type=str, default='custom_resnet', help='Experiment name')
    parser.add_argument('--batch_size', type=int, default=64, help='Batch size for training')
    parser.add_argument('--epochs', type=int, default=30, help='Number of training epochs')
    parser.add_argument('--lr', type=float, default=0.01, help='Learning rate')
    return parser.parse_args()
    
    
def main(args):
    seed_fix(SEED)

    exp_name = args.exp_name
    batch_size = args.batch_size
    epochs = args.epochs
    lr = args.lr
    
    train_loader, test_loader = load_data(batch_size)
    
    model = CustomResNet().to(DEVICE)
    # optimizer = optim.SGD(model.parameters(), lr=lr, momentum=0.9, weight_decay=0.0005)
    optimizer = optim.Adam(model.parameters(), lr=lr, weight_decay=0.0005)
    scheduler = optim.lr_scheduler.StepLR(optimizer, step_size=30, gamma=0.1)


    # 훈련 및 테스트 손실을 저장할 리스트 생성
    train_losses = []
    test_losses = []

    # 조기학습 종료
    patience_limit = 15
    patience_check = 0

    # Loss curve를 그리기 위한 리스트 생성
    train_losses = []
    test_losses = []

    # 에폭(epoch)별로 학습 및 테스트 수행
    best_acc = 0
    best_loss = 1e9
    best_epoch = 0

    for epoch in range(1, epochs + 1):
        running_loss = train(model, train_loader, optimizer, DEVICE, epoch)
        epoch_loss = running_loss / len(train_loader.dataset)
        test_loss, test_accuracy = evaluate(model, test_loader, DEVICE)
        
        scheduler.step()
        
        # 훈련 및 테스트 손실 기록
        train_losses.append(epoch_loss)
        test_losses.append(test_loss)
        
        if test_loss < best_loss:
            best_loss = test_loss
            best_epoch = epoch
            best_acc = test_accuracy
            patience_check = 0
        else:
            patience_check += 1
            
        if patience_check >= patience_limit:
            break
        
        print('[{}] Test Loss: {:.4f}, Accuracy: {:.2f}%'.format(epoch, test_loss, test_accuracy))

    
    make_plot(train_losses, test_losses, best_loss, best_acc, best_epoch, exp_name)
    
    # 모델 저장
    torch.save(model.state_dict(), f'./save_weights/{exp_name}.pt')

if __name__ == "__main__":    
    args = parse_opt()
    main(args)
    
