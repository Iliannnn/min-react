Custom forms with multiple customizable components

=== "Code"

    ``` html
    <Form>
        <Form.Input type="text" />
        <br />
        <br />
        <Form.TextArea />
        <br />
        <br />
        <Form.Addon>$</Form.Addon><Form.Input type="text" />
    </Form>
    ```

=== "Result"

    ![forms](../assets/form.png)

!!! info
    The `Input`, `TextArea` and `Addon` components are all optional.
    You can use any combination of them to create your own custom form.

!!! info
    The `Input`, `TextArea` and `Addon` components can be styled like you would style any other input/textarea component. For example, you can add a `placeholder` attribute to the `Input` component.

!!! warning
    The `Addon` and `Input` component need to be placed next to each other on the same line otherwise there will be a gap between them.