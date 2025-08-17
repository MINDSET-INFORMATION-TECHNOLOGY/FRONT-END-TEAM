// CreateAccount.jsx
// Professional, responsive student account creation form for Nigerian institutions
// Includes error handling, input sanitation, and integration with the existing app
// Author: FRONT-END-TEAM
// Date: August 2025
//
// This component allows students to create an account, selecting their institution and year.
// It validates inputs, sanitizes data, and provides user feedback for errors.
//
import React, { useState } from 'react';
import './CreateAccount.css';

// Nigeria-centric institution options
const institutions = [
	'University of Lagos',
	'Obafemi Awolowo University',
	'Ahmadu Bello University',
	'University of Ibadan',
	'Covenant University',
	'Federal University of Technology, Akure',
	'Lagos State University',
	'Babcock University',
];

const years = ['100', '200', '300', '400', '500'];

// Simple input sanitation
const sanitizeInput = (value) => value.replace(/[^a-zA-Z0-9 .@'-]/g, '').trim();

const CreateAccount = ({ onAccountCreated }) => {
	// Form state
	const [fullName, setFullName] = useState('');
	const [email, setEmail] = useState('');
	const [institution, setInstitution] = useState('');
	const [year, setYear] = useState('');
	const [errors, setErrors] = useState({});
	const [loading, setLoading] = useState(false);

	// Validate form fields
	const validate = () => {
		const newErrors = {};
		if (!fullName || fullName.length < 3) {
			newErrors.fullName = 'Full Name is required (min 3 characters).';
		}
		if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
			newErrors.email = 'Valid Email Address is required.';
		}
		if (!institution) {
			newErrors.institution = 'Please select your institution.';
		}
		if (!year) {
			newErrors.year = 'Please select your year.';
		}
		return newErrors;
	};

	// Handle form submission
	const handleSubmit = async (e) => {
		e.preventDefault();
		setErrors({});
		setLoading(true);
		// Sanitize inputs
		const sanitizedFullName = sanitizeInput(fullName);
		const sanitizedEmail = sanitizeInput(email);
		const formErrors = validate();
		if (Object.keys(formErrors).length > 0) {
			setErrors(formErrors);
			setLoading(false);
			return;
		}
		// Simulate API call (replace with real API integration)
		setTimeout(() => {
			setLoading(false);
			if (onAccountCreated) {
				onAccountCreated({
					fullName: sanitizedFullName,
					email: sanitizedEmail,
					institution,
					year,
				});
			}
			// Optionally, reset form
			setFullName('');
			setEmail('');
			setInstitution('');
			setYear('');
		}, 1200);
	};

	// Responsive, accessible form
	return (
		<div className="create-account-container">
			<form className="create-account-form" onSubmit={handleSubmit} noValidate>
				<h2 className="form-title">Create Account</h2>
				<p className="form-subtitle">Join thousands of students earning while learning</p>

				<div className="form-group">
					<label htmlFor="fullName">Full Name</label>
					<input
						type="text"
						id="fullName"
						name="fullName"
						value={fullName}
						onChange={e => setFullName(sanitizeInput(e.target.value))}
						autoComplete="name"
						placeholder="e.g. Chinedu Okafor"
						required
					/>
					{errors.fullName && <span className="error">{errors.fullName}</span>}
				</div>

				<div className="form-group">
					<label htmlFor="email">Email Address</label>
					<input
						type="email"
						id="email"
						name="email"
						value={email}
						onChange={e => setEmail(sanitizeInput(e.target.value))}
						autoComplete="email"
						placeholder="e.g. chinedu.okafor@unilag.edu.ng"
						required
					/>
					{errors.email && <span className="error">{errors.email}</span>}
				</div>

				<div className="form-row">
					<div className="form-group">
						<label htmlFor="institution">Institution</label>
						<select
							id="institution"
							name="institution"
							value={institution}
							onChange={e => setInstitution(e.target.value)}
							required
						>
							<option value="">Select Institution</option>
							{institutions.map(inst => (
								<option key={inst} value={inst}>{inst}</option>
							))}
						</select>
						{errors.institution && <span className="error">{errors.institution}</span>}
					</div>
					<div className="form-group">
						<label htmlFor="year">Year</label>
						<select
							id="year"
							name="year"
							value={year}
							onChange={e => setYear(e.target.value)}
							required
						>
							<option value="">Select Year</option>
							{years.map(y => (
								<option key={y} value={y}>{y} Level</option>
							))}
						</select>
						{errors.year && <span className="error">{errors.year}</span>}
					</div>
				</div>

				<button
					type="submit"
					className="submit-btn"
					disabled={loading}
				>
					{loading ? 'Creating Account...' : 'Create Account'}
				</button>
			</form>
		</div>
	);
};

export default CreateAccount;
