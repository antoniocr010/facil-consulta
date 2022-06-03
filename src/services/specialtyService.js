class SpecialtyService {
  async get() {
    const baseURL = 'https://api-teste-front-end-fc.herokuapp.com/especialidades';
    const res = await fetch(baseURL);

    return res.json().then((data) =>
      data
        .map((state) => {
          return {
            text: state.nome,
            value: state.nome,
          };
        })
        .sort()
    );
  }
}

export default new SpecialtyService();
