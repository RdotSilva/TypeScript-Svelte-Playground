<script>
  let values = { username: "", email: "", password: "" };
</script>

<form>
  <label for="username">Username:</label><br />
  <input
    id="username"
    name="username"
    type="text"
    bind:value={values.username}
  /><br />

  <label for="email">Email:</label><br />
  <input id="email" name="email" type="email" bind:value={values.email} /><br />

  <label for="password">Password:</label><br />
  <input
    id="password"
    name="password"
    type="password"
    bind:value={values.password}
  /><br />
</form>
