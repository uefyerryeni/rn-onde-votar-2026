# RN • Onde vou votar?

Consulta independente de mudanças de local de votação no Rio Grande do Norte entre o primeiro e o segundo turno das eleições de 2026.

Site estático, sem cadastro ou coleta de CPF/título. Busca por município, zona e seção. Links para buscar os locais e o trajeto no Google Maps, compartilhamento de consultas e download dos dados.

## Fonte e limites

TSE → Estatísticas → Eleitorado da eleição → Capilaridade → Seções alteradas. Ano 2026, UF RN; demais filtros sem restrição. Atualização do painel: 17/10/2026 às 20h28. Extração de 19 páginas: 369 seções únicas, 52 municípios, 100 combinações de local anterior e novo.

Fonte: https://sig.tse.jus.br/ords/dwapr/r/seai/sig-eleicao-eleitorado/se%C3%A7%C3%B5es-alteradas?p0_uf=RN

A base é uma cópia, sem atualização automática. Ausência de seção na lista não comprova que seu endereço permaneceu igual. Confirme no e-Título ou Autoatendimento Eleitoral.

O painel não fornece endereços ou coordenadas nesta tabela. Os links do Google Maps pesquisam nome e município; não são pontos validados. A validação dos endereços deve ser uma etapa separada, preservando a fonte de cada endereço.

## Executar e publicar

Sirva `dist/` com qualquer servidor estático. Não há dependências de execução ou etapa de compilação. Para GitHub Pages, configure o workflow incluído e habilite Pages com origem GitHub Actions. O arquivo `dist/data.js` contém os registros agrupados, e `dist/secoes-alteradas-RN.csv` preserva uma linha por seção.

## Atualizar dados

Reextraia a consulta oficial completa, confira duplicatas pela combinação UF/município/zona/seção, atualize o CSV e os registros agrupados, e ajuste a data exibida em `index.html`, `app.js` e nesta documentação. Não altere a data sem nova consulta. Teste filtros, links compartilháveis e os totais.

## Correções

Ao abrir uma issue, informe município, zona, seção e uma fonte pública oficial. Não inclua CPF, título de eleitor nem dados pessoais.
