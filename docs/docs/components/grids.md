Easily make grids without needing to worry about any CSS

=== "Code"

    ``` html
    <Grid>
        <Grid.Column size={12} style={{ backgroundColor: '#acacac', height: '32px', marginBottom: '13px' }}>12</Grid.Column>

        <Grid.Column size={11} style={{ backgroundColor: '#acacac', height: '32px', marginBottom: '13px' }}>11</Grid.Column>
        <Grid.Column size={1} style={{ backgroundColor: '#dfdfdf', height: '32px', marginBottom: '13px' }}>1</Grid.Column>

        <Grid.Column size={10} style={{ backgroundColor: '#acacac', height: '32px', marginBottom: '13px' }}>10</Grid.Column>
        <Grid.Column size={2} style={{ backgroundColor: '#dfdfdf', height: '32px', marginBottom: '13px' }}>2</Grid.Column>

        <Grid.Column size={9} style={{ backgroundColor: '#acacac', height: '32px', marginBottom: '13px' }}>9</Grid.Column>
        <Grid.Column size={3} style={{ backgroundColor: '#dfdfdf', height: '32px', marginBottom: '13px' }}>3</Grid.Column>

        <Grid.Column size={8} style={{ backgroundColor: '#acacac', height: '32px', marginBottom: '13px' }}>8</Grid.Column>
        <Grid.Column size={4} style={{ backgroundColor: '#dfdfdf', height: '32px', marginBottom: '13px' }}>4</Grid.Column>

        <Grid.Column size={7} style={{ backgroundColor: '#acacac', height: '32px', marginBottom: '13px' }}>7</Grid.Column>
        <Grid.Column size={5} style={{ backgroundColor: '#dfdfdf', height: '32px', marginBottom: '13px' }}>5</Grid.Column>

        <Grid.Column size={6} style={{ backgroundColor: '#acacac', height: '32px', marginBottom: '13px' }}>6</Grid.Column>
        <Grid.Column size={6} style={{ backgroundColor: '#dfdfdf', height: '32px', marginBottom: '13px' }}>1</Grid.Column>

        <Grid.Column size={5} style={{ backgroundColor: '#acacac', height: '32px', marginBottom: '13px' }}>5</Grid.Column>
        <Grid.Column size={7} style={{ backgroundColor: '#dfdfdf', height: '32px', marginBottom: '13px' }}>2</Grid.Column>

        <Grid.Column size={4} style={{ backgroundColor: '#acacac', height: '32px', marginBottom: '13px' }}>4</Grid.Column>
        <Grid.Column size={8} style={{ backgroundColor: '#dfdfdf', height: '32px', marginBottom: '13px' }}>3</Grid.Column>

        <Grid.Column size={3} style={{ backgroundColor: '#acacac', height: '32px', marginBottom: '13px' }}>3</Grid.Column>
        <Grid.Column size={9} style={{ backgroundColor: '#dfdfdf', height: '32px', marginBottom: '13px' }}>4</Grid.Column>

        <Grid.Column size={2} style={{ backgroundColor: '#acacac', height: '32px', marginBottom: '13px' }}>2</Grid.Column>
        <Grid.Column size={10} style={{ backgroundColor: '#dfdfdf', height: '32px', marginBottom: '13px' }}>5</Grid.Column>

        <Grid.Column size={1} style={{ backgroundColor: '#acacac', height: '32px', marginBottom: '13px' }}>1</Grid.Column>
        <Grid.Column size={11} style={{ backgroundColor: '#dfdfdf', height: '32px', marginBottom: '13px' }}>6</Grid.Column>

        <Grid.Column size={12} style={{ backgroundColor: '#dfdfdf', height: '32px', marginBottom: '13px' }}>12</Grid.Column>
    </Grid>
    ```

=== "Result"

    ![table](../assets/grid.png)

!!! warning 
    The added styles are only for demonstration purposes. They are not required nor a part of the component.