(async () => {
  try {
    const res = await fetch("http://localhost:3001/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Test User",
        email: "tester@example.com",
        interest: "signals",
        message: "hello from test",
      }),
    });
    const txt = await res.text();
    console.log("STATUS", res.status);
    console.log(txt);
  } catch (e) {
    console.error(e);
  }
})();
