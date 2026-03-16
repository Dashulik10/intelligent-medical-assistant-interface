export const authConfig = {
    name: "Доступ медицинского ассистента",
    description: "Управление аккаунтом ИИ-ассистента",
    tabs: {
        login: "Вход",
        signup: "Регистрация",
    },
    login: {
        title: "С возвращением",
        description: "Войдите, чтобы получить доступ к вашему диагностическому ассистенту",
        emailLabel: "Email",
        emailPlaceholder: "doctor@hospital.com",
        passwordLabel: "Пароль",
        passwordPlaceholder: "••••••••",
        submitButton: "Войти",
        rememberMe: "Запомнить меня",
        forgotPassword: "Забыли пароль?",
    },
    signup: {
        title: "Создать аккаунт",
        description: "Начните работу с MedMind AI",
        nameLabel: "Полное имя",
        namePlaceholder: "Д-р Анна Смирнова",
        emailLabel: "Email",
        emailPlaceholder: "doctor@hospital.com",
        passwordLabel: "Пароль",
        passwordPlaceholder: "Придумайте пароль",
        submitButton: "Создать аккаунт",
        termsText:
            "Регистрируясь, вы соглашаетесь с нашими Условиями обслуживания и Политикой конфиденциальности",
    },
    sso: {
        dividerText: "Или войдите через",
        buttonText: "SSO / Медицинский ID",
    },
};
