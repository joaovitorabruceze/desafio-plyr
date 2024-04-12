import mysql from 'mysql';

const conexao = mysql.createConnection({
    host: 'localhost',//localhost
    user: 'root',//root
    password: 'root',//root
    database: 'trabalho2',//trabalho2
    port: 3306,//3306
});

conexao.connect();

const consulta = (sql: string, valores = '', msgReject: string) => {
    return new Promise((resolve, reject) => {
        conexao.query(sql, valores, (erro, resultado) => {
            if (erro) return reject(msgReject);
            const row = JSON.parse(JSON.stringify(resultado));
            return resolve(row);
        })
    })
};

export { conexao, consulta };