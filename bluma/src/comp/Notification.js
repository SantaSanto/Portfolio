import React from 'react'

export const Notification = ({show, href, children}) => {

	if (!show) return null;

	return (
		<div className="notification is-success">
			<a className="delete" href={href} />			
			{children}
		</div>
	)
}