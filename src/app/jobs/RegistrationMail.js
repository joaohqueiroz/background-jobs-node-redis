import Mail from '../lib/Mail';

export default {
    key: 'RegistratioMail',
    options: {
        delay: 5000,
        priority: 3
    },
    async handle({ data }) {
        const { user } = data;

        await Mail.sendMail({
            from: 'contato@dev.com.br',
            to: `${user.name} <${user.email}>`,
            subject: 'Cadastro de usuário',
            html: `Olá, ${user.name}, bem-vindo a nossa plataforma`
        });
    }
}