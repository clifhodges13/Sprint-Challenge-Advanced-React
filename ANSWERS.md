- [ ] Why would you use class component over function components (removing hooks from the question)?

    1. Class components give us the ability to control what happens during the component lifecycle. Before hooks, this was the only way to do it.

- [ ] Name three lifecycle methods and their purposes.

    2. 3 lifecycle methods
       1. constructor - this is generally where you store your initial state. It runs when the component is created in memory, before mounting
       2. componentDidMount - this runs immediately after the component mounts. Great place to handle side effects, like making an api call
       3. render - the only required method in a class component. This contains your jsx

- [ ] What is the purpose of a custom hook?

    3. A custom hook are reusable. They allow us to keep our code dry.

- [ ] Why is it important to test our apps?

    4. Testing our apps lets us see where things go wrong so we can fix them, as opposed to just letting the users find the errors accidentally. We can test for a specific outcome, and if we do not receive it, we can debug our code.