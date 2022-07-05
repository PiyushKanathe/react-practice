const TabComponent = ({setActive, name, updateContent}) => {
    return (
        <div className={setActive === name ? "activeTabs" : "tabs"} onClick={() => updateContent(name)}>{name}</div>
    )
}
export default TabComponent