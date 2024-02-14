const data = [
    {
        id: '1',
        question: "What is React? What is the Role of React in software development?",
        answer: "❖ 3 Main Points about React\n" +
                "1. React is an open-source JavaScript Library.\n" +
                "2. React is used for building user interfaces (UI).\n" +
                "3. React simplifies the creation of SPA by using reusable components."
    },
    {
        id: '2',
        question: "What is DOM? What is the difference between HTML and DOM?",
        answer: "DOM (Document Object Model) represents the web page as a tree-like structure which allows JavaScript to dynamically access and manipulate the content and structure of a web page."
    },
    {
        id: '3',
        question: "Explain the concept of JSX in React and why it is used?",
        answer: "JSX (JavaScript XML) is a syntax extension for JavaScript recommended by React. It allows you to write HTML elements and components in a syntax that looks similar to XML or HTML. JSX is used in React to describe what the UI should look like, and it is then transformed into JavaScript objects by a process called transpilation. This makes it easier to write and understand React components."
    },
    {
        id: '4',
        question: "What are React components? Explain the difference between functional components and class components.",
        answer: "React components are the building blocks of a React application. They are reusable, self-contained units that define how a part of the UI should appear and behave. Functional components are defined as JavaScript functions and are typically stateless. Class components, on the other hand, are ES6 classes that can hold and manage local state. The key difference is that functional components are simpler and more concise, while class components have additional features such as state and lifecycle methods."
    },
    {
        id: '5',
        question: "How does React handle state? Explain the significance of lifting state up.",
        answer: "In React, state is used to store and manage data within a component. State can be modified using the `setState` function, triggering a re-render of the component. Lifting state up is a pattern where the state is moved to a common ancestor component when multiple components need to share the same state. This allows for better control and coordination of state changes, promoting a more predictable and maintainable application."
    },
    {
        id: '6',
        question: "What is a functional component in React? How is it different from a class component?",
        answer: "A functional component in React is a JavaScript function that returns a React element. It is a simpler and more concise way to define components compared to class components. Functional components are primarily used for presentational purposes, and they do not have state or lifecycle methods. With the introduction of Hooks in React, functional components can now handle state and side effects, making them more powerful and versatile."
    },
    {
        id: '7',
        question: "Explain the concept of Hooks in React. Provide examples of commonly used hooks.",
        answer: "Hooks are functions that enable functional components to use state and lifecycle features in React. The most commonly used hooks include:\n\n1. useState: Manages local state within functional components.\n2. useEffect: Performs side effects in functional components, such as data fetching or subscriptions.\n3. useContext: Accesses the value of a context within a functional component.\n4. useCallback and useMemo: Memoize functions and values to optimize performance."
    },
    {
        id: '8',
        question: "What is React memoization? How can you optimize functional components using React.memo?",
        answer: "React memoization is a technique to optimize functional components by preventing unnecessary renders. React.memo is a higher-order component that memoizes the result of a functional component, re-rendering only when the input props change. This can significantly improve performance by avoiding re-renders when the component's output is the same for a given set of props. It is particularly useful for optimizing functional components that receive static or rarely changing props."
    }
];

export default data;
