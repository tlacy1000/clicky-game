import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Cards from '../Card/Cards';
import cards from '../../cards.json';
import Wrapper from '../Wrapper/Wrapper'

// Import all components to game

class Game extends React.Component {
    state = {
        cards,
        score: 0,
        highscore: 0
    };
    componentDidMount() {
        this.setState({
            cards: this.shuffleCard(this.state.cards)
        })
    };

    handleCorrectGuess = newCard => {
        const { score, highscore } = this.state;
        const newScore = score + 1;
        const newHighScore = Math.max(newScore, highscore);
        this.setState({
            cards: this.shuffleCard(newCard),
            score: newScore,
            highscore: newHighScore
        })
    };

    handleIncorrectGuess = cards => {
        this.setState({
            cards: this.resetCards(cards),
            score: 0
        })
        alert(`Game Over :( \nscore: ${this.state.score}`);
        this.setState({ score: 0 });
        return true;
    };

    resetCards = cards => {
        const resetCards = cards.map(item => ({ ...item, clicked: false }));
        return this.shuffleCard(resetCards);
    };

    shuffleCard = cards => {
        let i = cards.length - 1;
        while (i > 0) {
            const k = Math.floor(Math.random() * (i + 1));
            const temp = cards[i];
            cards[i] = cards[k];
            cards[k] = temp;
            i--;
        }
        return cards;
    };

    clickCount = id => {
        let guessCorrectly = false;
        const newCard = this.state.cards.map(item => {
            var newItem = { ...item };
            if (newItem.id === id) {
                if (!newItem.clicked) {
                    newItem.clicked = true;
                    guessCorrectly = true;
                }
            }
            return newItem;
        })
        guessCorrectly ? this.handleCorrectGuess(newCard) : this.handleIncorrectGuess(newCard)

    };


    render() {
        return (
            <div>
                <Header />
                <Wrapper>
                    {this.state.cards.map(card => (
                        <Cards
                            id={card.id}
                            key={card.id}
                            name={card.name}
                            image={card.image}
                        />
                    ))}</Wrapper>

                <Footer />
            </div >
        );
    }
    // game functions: onclick, shuffle, score
}
export default Game;