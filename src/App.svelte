<!-- App.svelte -->
<script>
	import { Router, Link, Route } from "svelte-navigator";
	import Home from "./Component/Home.svelte";
  import About from "./Component/About.svelte";
  import Contact from "./Component/Contact.svelte";
  import Signup from "./Component/Signup.svelte";
</script>
<Router>
  <nav>
  </nav>
  <div>
    <Route path="/" component={Home} />
    <Route path="about" component={About} />
    <Route path="contact" component={Contact} />
    <Route Path="signup" component={Signup} />
  </div>
</Router>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>