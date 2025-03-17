class Usuario {
  constructor(username, name, lastname) {
    this.username = username;
    this.name = name;
    this.lastname = lastname;
  }

  static getUsuario() {
    return new Usuario(
      "jaimegpm_hiberus",
      "Jaime",
      "García-Page Marchante"
    );
  }
}

export default Usuario; 