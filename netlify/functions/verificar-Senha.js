exports.handler = async (event) => {
  const { senha } = JSON.parse(event.body);
  const senhaCorreta = process.env.SENHA_ACESSO;

  if (senha === senhaCorreta) {
    return {
      statusCode: 200,
      body: JSON.stringify({ acesso: true }),
    };v
  } else {
    return {
      statusCode: 401,
      body: JSON.stringify({ acesso: false }),
    };
  }
};
