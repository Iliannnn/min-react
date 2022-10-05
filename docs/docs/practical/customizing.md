Every component is highly customizable. Every component can be changed to the way you'd like, it can be invoked with different props, and it can be styled with your own CSS.

## Customizing props of a component

For example, adding a placeholder to the `Input` component:

=== "Code"

    ``` html
    <Form.Input placeholder="Enter your name" />
    ```

=== "Result"
    
    ![input](../assets/input.png)

## Customizing CSS of a component

For example, you can change the color of a button component in two ways:

Using a CSS class:

=== "Component file"

    ``` html
    <Button className="green">
        Click me
    </Button>
    ```

=== "CSS file"

    ``` css
    .green {
        background: #91D564;
    }
    ```

=== "Result"

    ![green button](../assets/green-button.png)

Using JSX styling:

=== "Code"

    ``` html
    <Button style={{ backgroundColor: "#91D564" }}>
        Click me
    </Button>
    ```

=== "Result"
    
    ![green button](../assets/green-button.png)

As you can see, every prop or style you add to a component will be added to the component's element. For example, if you add a `className` prop to a `Button` component, it will be added to the `button` element. No matter what you add, it will be added to the component's element. This is how you can customize components.