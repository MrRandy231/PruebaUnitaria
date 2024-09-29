touch app.test.js

const { execSync } = require('child_process');

test('Verificar salida de Hola Mundo', () => {
    const output = execSync('node app.js').toString();
    expect(output.trim()).toBe('Hola Mundo');
});
