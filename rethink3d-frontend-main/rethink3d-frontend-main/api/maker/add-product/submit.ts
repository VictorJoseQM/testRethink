export default function submit(url: string, data: FormData) {
  data.append("userId", "1");
  data.append("makerId", "1");

  fetch(url, {
    body: data,
    method: "post",
  })
    .then((response) => response.json())
    .then((responseData) => {
      alert("Produto adicionado!");
      console.log(responseData);
    })
    .catch((e) => {
      console.warn(e);
      if (e instanceof Error)
        alert(`Produto não foi adicionado. ERRO: ${e.message}`);
    });
}
