// pages/admin.js
import { useState } from "react";

const ADMIN_PASSWORD = "Jorgebasket07"; // sua senha

export default function AdminPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [sinais, setSinais] = useState([]);
  const [novoSinal, setNovoSinal] = useState({
    data: "",
    hora: "",
    tipo: "",
    preco: "",
    stop: "",
  });

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setLoggedIn(true);
      setPassword("");
    } else {
      alert("Senha incorreta!");
    }
  };

  const handleAddSinal = () => {
    if (
      !novoSinal.data ||
      !novoSinal.hora ||
      !novoSinal.tipo ||
      !novoSinal.preco ||
      !novoSinal.stop
    ) {
      alert("Preencha todos os campos!");
      return;
    }
    setSinais([novoSinal, ...sinais]);
    setNovoSinal({ data: "", hora: "", tipo: "", preco: "", stop: "" });
  };

  if (!loggedIn) {
    return (
      <div
        style={{
          display: "flex",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <h1>Painel Privado - Comar Trades</h1>
        <input
          type="password"
          placeholder="Digite a senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: 8, fontSize: 16, width: 200 }}
        />
        <button onClick={handleLogin} style={{ padding: 8, width: 100 }}>
          Entrar
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 800, margin: "auto", padding: 20 }}>
      <h2>Painel de Sinais - Admin</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: 10,
          marginBottom: 20,
        }}
      >
        <input
          type="text"
          placeholder="Data (dd/mm/aaaa)"
          value={novoSinal.data}
          onChange={(e) =>
            setNovoSinal({ ...novoSinal, data: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Hora (HH:mm)"
          value={novoSinal.hora}
          onChange={(e) =>
            setNovoSinal({ ...novoSinal, hora: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Tipo (Compra/Venda)"
          value={novoSinal.tipo}
          onChange={(e) =>
            setNovoSinal({ ...novoSinal, tipo: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Preço"
          value={novoSinal.preco}
          onChange={(e) =>
            setNovoSinal({ ...novoSinal, preco: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Stop"
          value={novoSinal.stop}
          onChange={(e) =>
            setNovoSinal({ ...novoSinal, stop: e.target.value })
          }
        />
      </div>

      <button onClick={handleAddSinal} style={{ padding: 10, width: "100%" }}>
        Adicionar Sinal
      </button>

      <table
        style={{ width: "100%", marginTop: 20, borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            <th
              style={{
                borderBottom: "1px solid #ccc",
                textAlign: "left",
                padding: 8,
              }}
            >
              Data
            </th>
            <th
              style={{
                borderBottom: "1px solid #ccc",
                textAlign: "left",
                padding: 8,
              }}
            >
              Hora
            </th>
            <th
              style={{
                borderBottom: "1px solid #ccc",
                textAlign: "left",
                padding: 8,
              }}
            >
              Tipo
            </th>
            <th
              style={{
                borderBottom: "1px solid #ccc",
                textAlign: "left",
                padding: 8,
              }}
            >
              Preço
            </th>
            <th
              style={{
                borderBottom: "1px solid #ccc",
                textAlign: "left",
                padding: 8,
              }}
            >
              Stop
            </th>
          </tr>
        </thead>
        <tbody>
          {sinais.map((sinal, i) => (
            <tr key={i}>
              <td
                style={{
                  borderBottom: "1px solid #eee",
                  padding: 8,
                }}
              >
                {sinal.data}
              </td>
              <td
                style={{
                  borderBottom: "1px solid #eee",
                  padding: 8,
                }}
              >
                {sinal.hora}
              </td>
              <td
                style={{
                  borderBottom: "1px solid #eee",
                  padding: 8,
                }}
              >
                {sinal.tipo}
              </td>
              <td
                style={{
                  borderBottom: "1px solid #eee",
                  padding: 8,
                }}
              >
                {sinal.preco}
              </td>
              <td
                style={{
                  borderBottom: "1px solid #eee",
                  padding: 8,
                }}
              >
                {sinal.stop}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
