<script>
  let name = 'Svelte'
  let src = 'http://picsum.com/200/200'
  let stringWithHtml = 'Some <strong>string<strong> with html'
</script>


<img {src} alt="Some text {name} "/>

<h1>Hello {name.toLocaleLowerCase()}</h1>

<p>{@html stringWithHtml}</p>

<style>
  h1 {
    color: red
  }
</style>