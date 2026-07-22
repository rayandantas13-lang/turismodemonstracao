// ============================================================
//  CONFIGURAÇÃO DO SITE — Porto Seguro e Costa do Descobrimento
// ============================================================
export const WHATSAPP_NUMBER = "5573988888888";
export const WHATSAPP_DISPLAY = "+55 (73) 98888-8888";
export const EMAIL = "contato@meridianocostadodescobrimento.com.br";
export const INSTAGRAM = "@meridiano.tur";

export const wa = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

export const DEFAULT_MSG =
  "Olá! Vim pelo site e quero montar meu pacote em Porto Seguro 🌴✈️ Quero saber sobre passeios para Arraial, Trancoso, Caraiva e Coroa Vermelha!";

export const DESTINATIONS_MSG: Record<string, string> = {
  "Arraial d'Ajuda": "Olá! Tenho interesse no passeio para Arraial d'Ajuda 🏖️ Pode me mandar valores e o que está incluso?",
  "Trancoso": "Olá! Quero conhecer Trancoso 😍 me manda detalhes do passeio - Quadrado, Praia do Espelho...?",
  "Caraiva": "Olá! Sonho em conhecer Caraiva 🌊 Quero saber do pacote com buggy/jetski e como funciona o dia por lá!",
  "Coroa Vermelha": "Olá! Quero fazer o passeio para Coroa Vermelha e Aldeia Pataxó 🏹 Quais os horários?",
};
