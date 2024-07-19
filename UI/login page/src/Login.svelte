<!-- src/Login.svelte -->
<script>
  let email = '';
  let password = '';

  const handleLogin = () => {
    console.log('Login with', email, password);
    // Handle login logic here
  };

  const handleGoogleLogin = () => {
    console.log('Login with Google');
    // Handle Google login logic here
  };

  const handleXLogin = () => {
    console.log('Login with X');
    // Handle X login logic here
  };
</script>

<main class="login-container">
  <div class="login-box">
    <h1>Welcome back</h1>
    <p>Enter your untitled account details</p>
    <button class="social-login" on:click={handleGoogleLogin}>Log in with Google</button>
    <button class="social-login" on:click={handleXLogin}>Log in with X</button>
    <div class="divider">OR</div>
    <input type="text" placeholder="Email or username" bind:value={email} />
    <input type="password" placeholder="Password" bind:value={password} />
    <div class="actions">
      <label><input type="checkbox" /> Keep me signed in</label>
      <a href="#" class="forgot-password">Forget password</a>
    </div>
    <button class="login-button" on:click={handleLogin}>Log in</button>
    <a href="#" class="create-account">Create an account</a>
  </div>
  <div class="trouble-signing-in">
    <a href="#">Trouble signing in?</a>
  </div>
</main>

<style>
  .login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f9f9f9;
  }

  .login-box {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    max-width: 400px;
    width: 100%;
  }

  h1 {
    margin: 0;
    font-size: 1.5rem;
  }

  p {
    margin: 0.5rem 0 1.5rem;
    color: #555;
  }

  .social-login {
    display: block;
    width: 100%;
    margin-bottom: 1rem;
    padding: 0.75rem;
    font-size: 1rem;
    border: none;
    border-radius: 4px;
    background-color: black;
    color: white;
    cursor: pointer;
  }

  .divider {
    margin: 1rem 0;
    font-size: 0.875rem;
    color: #aaa;
  }

  input {
    width: calc(100% - 1rem);
    margin: 0.5rem 0;
    padding: 0.75rem;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  .actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;
  }

  .forgot-password {
    color: #007bff;
    text-decoration: none;
  }

  .login-button {
    display: block;
    width: 100%;
    padding: 0.75rem;
    font-size: 1rem;
    border: none;
    border-radius: 4px;
    background-color: black;
    color: white;
    cursor: pointer;
  }

  .create-account {
    display: block;
    margin-top: 1rem;
    color: #007bff;
    text-decoration: none;
  }

  .trouble-signing-in {
    margin-top: 2rem;
    color: #007bff;
  }

  .trouble-signing-in a {
    text-decoration: none;
  }
</style>
