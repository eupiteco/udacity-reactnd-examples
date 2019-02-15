import React from 'react'

const List = ({items, removeItem, toggleItem}) => (
	<ul>
	{
		items.map((item) => (
			<li key={item.id}>
				<span
					onClick={() => {toggleItem && toggleItem(item.id)}}
					style={{textDecoration: item.complete ? 'line-through' : 'none'}}
				>{item.name}</span>
				<button onClick={() => removeItem(item)}>X</button>
			</li>
		))
	}
	</ul>
)

export default List
