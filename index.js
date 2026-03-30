const produtos = [
    "https://shopee.com.br/Batom-Ruby-Rose-Satin-Lip-Luxe-%E2%80%93-Acabamento-Satin-i.598262111.58204020753?extraParams=%7B%22display_model_id%22%3A238801309844%2C%22model_selection_logic%22%3A3%7D",
    "https://shopee.com.br/Batom-L%C3%ADquido-Horas-Confort-Hidrata%C3%A7%C3%A3o-Max-Love-i.598262111.58254010059?extraParams=%7B%22display_model_id%22%3A119727618560%2C%22model_selection_logic%22%3A3%7D",
    "https://shopee.com.br/P%C3%B3-Facial-Banana-Finalizador-Bella-Bem-Me-Quero-i.598262111.58254007678?extraParams=%7B%22display_model_id%22%3A159789822621%2C%22model_selection_logic%22%3A3%7D",
    "https://shopee.com.br/P%C3%B3-Facial-Rosa-Mosqueta-Bella-Bem-Me-Quero-i.598262111.58204021114?extraParams=%7B%22display_model_id%22%3A109727345459%2C%22model_selection_logic%22%3A3%7D",
    "https://shopee.com.br/M%C3%A1scara-Facial-Black-Limpa-Poros-Peel-Off-Dalla-i.598262111.58204021402?extraParams=%7B%22display_model_id%22%3A169414150311%2C%22model_selection_logic%22%3A3%7D"

]

function clicarProduto(id) {
    
    window.dataLayer.push({
    event: 'click_produto',
        seila: `Produto ${id}`
    });
    location.href = produtos[id];
}