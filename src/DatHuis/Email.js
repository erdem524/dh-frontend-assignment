import React from 'react';

function Email() {
	return (
		<div className="floating-label-group">
			<input
				style={{ width: 380 }}
				type="text"
				id="username"
				class="form-control"
				autocomplete="off"
				autofocus
				required
			/>
			<label class="floating-label">E-mail</label>
		</div>
	);
}

export default Email;
