// ============================================================
//  CONFIGURAÇÃO DO SITE — edite aqui o número do WhatsApp
//  Formato: código do país + DDD + número (somente dígitos)
// ============================================================
export const WHATSAPP_NUMBER = "5511999999999";
export const WHATSAPP_DISPLAY = "+55 (11) 99999-9999";
export const EMAIL = "ola@meridiano.tur.br";

export const wa = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

export const DEFAULT_MSG =
  "Olá! Vim pelo site da Meridiano e quero montar minha próxima viagem. ✈️";
