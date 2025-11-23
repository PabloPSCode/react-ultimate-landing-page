export const handleStartWhatsAppConversation = () => {
  const whatsAppUrl =
    "https://api.whatsapp.com/send?phone=556492859310&text=Olá, gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Symbol.";
  window.open(whatsAppUrl, "_blank");
};

export const visitDocs = () => {
  window.open("https://docs.reactultimate.pablosilvadev.com.br/", "_blank");
};
