const LoginForm = ({
  onPasswordChange,
  onEmailChange,
  onLogin,
  email,
  password
}) => (
  <div className="form-container">
    <label>Email</label>
    <input
      onChange={onEmailChange}
      type="text"
      id="email"
      value={email}
      className="width-100"
    />
    <label>Password</label>
    <input
      onChange={onPasswordChange}
      type="password"
      id="password"
      value={password}
      className="width-100"
    />
    <button onClick={onLogin}>Log in</button>
  </div>
);
export default LoginForm;
