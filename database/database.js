import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync(
  'gastos.db'
);

export function initDatabase() {
  try {
    db.execSync(`
      CREATE TABLE IF NOT EXISTS gastos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        descricao TEXT NOT NULL,
        categoria TEXT NOT NULL,
        valor REAL NOT NULL,
        data TEXT NOT NULL
      );
    `);

    console.log(
      'Banco inicializado com sucesso'
    );
  } catch (error) {
    console.log(
      'Erro ao criar tabela:',
      error
    );
  }
}

export function insertExpense(
  descricao,
  categoria,
  valor,
  data
) {
  try {
    db.runSync(
      `
      INSERT INTO gastos
      (
        descricao,
        categoria,
        valor,
        data
      )
      VALUES (?, ?, ?, ?)
      `,
      [
        descricao,
        categoria,
        valor,
        data,
      ]
    );
  } catch (error) {
    console.log(
      'Erro ao inserir:',
      error
    );
  }
}

export function getExpenses() {
  try {
    return db.getAllSync(`
      SELECT *
      FROM gastos
      ORDER BY id DESC
    `);
  } catch (error) {
    console.log(
      'Erro ao listar:',
      error
    );

    return [];
  }
}

export function deleteExpense(id) {
  try {
    db.runSync(
      `
      DELETE FROM gastos
      WHERE id = ?
      `,
      [id]
    );
  } catch (error) {
    console.log(
      'Erro ao excluir:',
      error
    );
  }
}