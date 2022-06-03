class LocationService {
  states = {
    async get() {
      const baseURL = 'https://api-teste-front-end-fc.herokuapp.com/estados';
      const res = await fetch(baseURL);

      return res.json().then((data) =>
        data
          .map((state) => {
            return {
              text: state.nome,
              value: state.sigla,
            };
          })
          .sort()
      );
    },

    async getIdByInitials(uf) {
      const baseURL = `https://api-teste-front-end-fc.herokuapp.com/estados?sigla=${uf}`;
      const res = await fetch(baseURL);

      return res.json().then((data) => data[0].id);
    },
  };

  cities = {
    async get(uf) {
      const baseURL = `https://api-teste-front-end-fc.herokuapp.com/estados/${uf}/cidades`;
      const res = await fetch(baseURL);

      return res.json().then((data) =>
        data
          .map((city) => {
            return {
              text: city.nome,
              value: city.nome,
            };
          })
          .sort()
      );
    },
  };
}

export default new LocationService();
