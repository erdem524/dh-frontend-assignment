import React from 'react';

function Password() {
	return (
		<div className="floating-label-group">
			<input
				style={{ width: 380 }}
				type="password"
				id="password"
				class="form-control"
				autocomplete="off"
				autofocus
				required
			/>
			<label className="floating-label">Wachtword</label>
		</div>
	);
}

export default Password;
