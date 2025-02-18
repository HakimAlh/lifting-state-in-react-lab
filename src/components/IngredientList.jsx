const IngredientList = (props) => {
    return (
        <ul>
            {props.availableIngredients.map((ingredient) => (
                <li 
                style={{ backgroundColor: ingredient.color }}
                onClick={() =>props.handleAddToStack(ingredient)}
                >
                    {ingredient.name}
                </li>
            ))}
        </ul>
    )
}

export default IngredientList