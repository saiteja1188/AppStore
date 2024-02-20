// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, updateDetails, isActive} = props
  const {displayText, tabId} = tabDetails
  const activeClass = isActive ? `button-item active` : 'button-item '

  const updateTabId = () => {
    updateDetails(tabId)
  }

  return (
    <li className="list-items">
      <button type="button" className={activeClass} onClick={updateTabId}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
