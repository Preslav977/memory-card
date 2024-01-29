# memory-card

1. This is the Live Preview of the project Memory Card.

![Screenshot_2024-01-29_12-54-56](https://github.com/Preslav977/readme-repository/assets/119291608/db3c2438-52db-4dc3-81a1-73bb77e76fa1)

1.1. The project was fun and the idea was to build Memory Card, what i learned is, how to better structure my components, my applications.

The first thing i did was, to create two components the header and the main, these compoents are used to display with props the name of the game, instructions and the scores.

The second component, is used to render the cards, with using children prop, to pass this rendered array, when it was called in the App file.

In the previous project CV app, i did the mistake of deleting the App file, this file is used for main point of the app, and this explains if you import multiple components, why it takes a long time to load.

1.2. Four states, where used the first one is set to the array of pokemons, this why it will shuffle the array on click, the challenge was to implement the logic of shuffling, and how instead of using e.target, to pass the array of objects instead.

The second state, is used to push the pokemons id, but checking if the don't exist to put them in the state, otherwise remove them.

The third state, increments the score by one, if the pokemon doesn't exist in the state, and the last one is for the highest score, this as a bit of a challenge, as well, since i had trouble of having bigger points, and then by clicking the same card, the points were set to 1.

1.3 If i am coming back to this project, i will use useEffect, instead of await syntax, because i run into an error when deploying the projeect, and i had to look for an fix, overall it was not a big project, but i learned a ton.

And i will try to implement different difficulties of the game and fetching of new pokemons on loosing.
