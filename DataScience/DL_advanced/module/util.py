import torch
import random
import torch.backends.cudnn as cudnn
from torchvision import transforms, datasets
import torch.nn.functional as F
import numpy as np
import matplotlib.pyplot as plt

def seed_fix(seed):
    random.seed(seed)
    torch.manual_seed(seed)
    torch.cuda.manual_seed_all(seed)
    cudnn.benchmark = False
    cudnn.deterministic = True
    np.random.seed(seed)
    
def make_plot(train_losses, test_losses, best_loss, best_acc, best_epoch, exp_name):
    # Loss curve를 그림
    plt.plot(train_losses, label='Train Loss')
    plt.plot(test_losses, label='Test Loss')
    plt.title('Loss Curve')
    plt.xlabel('Epochs')
    plt.ylabel('Loss')
    plt.legend()

    # Loss가 가장 작은 지점에 빨간 점을 찍고 주석을 추가
    plt.scatter(best_epoch, best_loss, color='red', marker='o')
    plt.annotate(f'Loss: {best_loss:.4f}\nAcc: {best_acc:.2f}%\nEpoch: {best_epoch}', (best_epoch, best_loss), textcoords="offset points", xytext=(0, -40), ha='right')

    plt.savefig(f'./plot/{exp_name}_loss_curve.png')

def load_data(batch_size):
    # CIFAR-10 데이터셋을 불러옴
    trainset = datasets.CIFAR10(
        root='./.data/',
        train=True,
        download=True,
        transform=transforms.Compose([
            transforms.RandomCrop(32, padding=4),
            transforms.RandomHorizontalFlip(),
            # transforms.RandomVerticalFlip(),
            # transforms.ColorJitter(
            #     brightness=0.5, contrast=0.5, saturation=0.5, hue=0.2
            # ),
            transforms.ToTensor(),
            transforms.Normalize((0.5, 0.5, 0.5), (0.5, 0.5, 0.5))
        ])
    )
    testset = datasets.CIFAR10(
        root='./.data/',
        train=False,
        download=True,
        transform=transforms.Compose([
            transforms.ToTensor(),
            transforms.Normalize((0.5, 0.5, 0.5), (0.5, 0.5, 0.5))
            
        ])
    )

    train_loader = torch.utils.data.DataLoader(
        dataset=trainset,
        batch_size=batch_size,
        shuffle=True,
    )
    test_loader = torch.utils.data.DataLoader(
        dataset=testset,
        batch_size=batch_size,
        shuffle=True,
    )
    return train_loader, test_loader
    

# train 및 evaluate 함수는 그대로 사용
def train(model, train_loader, optimizer, device, epoch):
    running_loss = 0.0
    model.train()
    for batch_idx, (data, target) in enumerate(train_loader):
        data, target = data.to(device), target.to(device)
        optimizer.zero_grad()
        output = model(data)
        loss = F.cross_entropy(output, target)
        loss.backward()
        optimizer.step()
        
        if batch_idx % 200 == 0:
            print('Train Epoch: {} [{}/{} ({:.0f}%)]\tLoss: {:.6f}'.format(epoch, batch_idx * len(data), len(train_loader.dataset),100. * batch_idx / len(train_loader), loss.item()))
            
        
        
        running_loss += loss.item() * data.size(0)
    return running_loss

def evaluate(model, test_loader, device):
    model.eval()
    test_loss = 0
    correct = 0
    with torch.no_grad():
        for data, target in test_loader:
            data, target = data.to(device), target.to(device)
            output = model(data)
            
            # 배치 오차를 합산
            test_loss += F.cross_entropy(output, target, reduction='sum').item()
            
            # 가장 높은 값을 가진 인덱스가 바로 예측값
            pred = output.max(1, keepdim=True)[1]
            correct += pred.eq(target.view_as(pred)).sum().item()
            
        test_loss /= len(test_loader.dataset)
        test_accuracy = 100. * correct / len(test_loader.dataset)
        return test_loss, test_accuracy

