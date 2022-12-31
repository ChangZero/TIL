from hmm import Model


def main():
    states = ('rainy', 'sunny')
    symbols = ('walk', 'shop', 'clean')

    start_prob = {
        'rainy': 0.5,
        'sunny': 0.5
    }

    trans_prob = {
        'rainy': {'rainy': 0.7, 'sunny': 0.3},
        'sunny': {'rainy': 0.4, 'sunny': 0.6}
    }

    emit_prob = {
        'rainy': {'walk': 0.1, 'shop': 0.4, 'clean': 0.5},
        'sunny': {'walk': 0.6, 'shop': 0.3, 'clean': 0.1}
    }

    sequence = ['walk', 'shop', 'clean',
                'clean', 'walk', 'walk', 'walk', 'clean']
    model = Model(states, symbols, start_prob, trans_prob, emit_prob)

    print(f"evaluate : {model.evaluate(sequence)}")
    print(f"decode: {model.decode(sequence)}")


if __name__ == '__main__':
    main()
