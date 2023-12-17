<p align="center">
<img src="./src/assets/images/profit.png" width="30%"/>
</p>
<p align="center" style="font-size: 3rem">
Calculadora PJ x CLT
</p>

## Visão Geral

Esse é um projeto open source com o propósito de auxiliar profissionais a comparar e entender a remuneração mensal e anual dessas duas modalidade de contrato, e ajudar o trabalhador na tomada de decisão.

## TODOs:

- [ ] grafico mostrando diferenca salarial no final (chart.js)
    - Bar chart
    - Doughnut chart
    - Radar chart
- [ ] tooltip mostrando o que daria pra comprar com o imposto anual
      (principalmente CLT), ex: mostrando X coisas ou um carro 0km

## Como Usar

Acesse <a href="https://pjxclt.com" target="_blank">pjxclt.com</a> e insira as informações a serem comparadas, você pode:

- Preencher os valores nas duas colunas para comparação;

- Preencher os valores somente de uma coluna para estimar uma equivalência;

- Adicionar remunerações não listadas.

## Contribuição

Se você encontrar bugs ou tiver sugestões, por favor [abra uma issue](https://github.com/erickrodrig/pjxclt/issues) com os detalhes.

Caso queira contribuir melhorando ou criando funcionalidades leia [Contribuição - desenvolvimento.](/CONTRIBUTING.md).

## Como os valores são calculados

Ambos na CLT e PJ existem impostos e valores obrigatórios, além desses valores, as remunerações adicionais são calculadas de acordo com a frequência e o valor inputado pelo usuário.

Para valores diários é levado em consideração 22 dias úteis por mês.

Todos os valores são somados para um valor final anual. 

**Importante:** O valor mensal final é o valor anual divido por 12.

### Valores obrigatórios CLT:

- #### FGTS
    A cada mês, é obrigação dos empregadores depositar em contas abertas na Caixa Econômica Federal, em nome dos empregados, o valor correspondente a <b>8%</b> do salário bruto de cada funcionário. Este valor fica retido na conta do FGTS do funcionário e só pode ser sacado ou utilizado em [situações específicas](https://www.fgts.gov.br/Pages/sou-trabalhador/demais-saques.aspx). O valor não é descontado do salário.

- #### INSS:
    A contribuição para o Instituto Nacional do Seguro Social é calculada de acordo com o salário do trabalhador, seguindo as alíquotas progressivas estabelecidas pela tabela do INSS e atualizadas todo ano. O valor a ser recolhido varia proporcionalmente ao salário, dentro das seguintes faixas:

    <table>
        <th>Salário de Contribuição (R$)</th>
        <th>Alíquota</th>
        <tr>
            <td>até 1.320,00</td>
            <td>7,5%</td>
        </tr>
        <tr>
            <td>1.320,01 — 2.571,29</td>
            <td>9%</td>
        </tr>
        <tr>
            <td>2.571,30 — 3.856,94</td>
            <td>12%</td>
        </tr>
        <tr>
            <td>3.856,95 — 7.507,49	</td>
            <td>14%</td>
        </tr>
    </table>

    O valor devido é calculado aplicando-se a alíquota correspondente à faixa do salário do trabalhador. Importante ressaltar que este cálculo é progressivo, ou seja, para salários que ultrapassam as faixas iniciais, aplica-se a alíquota de cada faixa apenas sobre a parcela do salário que se enquadra naquela faixa, e não sobre o salário total. 
    
    Fonte tabela: [gov.br...](https://www.gov.br/inss/pt-br/direitos-e-deveres/inscricao-e-contribuicao/tabela-de-contribuicao-mensal)

- #### IRRF
    Assim como o cálculo do INSS, o IRRF também segue alíquotas progressivas que são aplicadas sobre a base de cálculo do salário e atualizadas anualmente. Confira a tabela:

    <table>
        <th>Base de cálculo (R$)</th>
        <th>Alíquota</th>
        <th>Dedução (R$)</th>
        <tr>
            <td>até 2.112,00</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>2.112,01 — 2.826,65</td>
            <td>7,5%</td>
            <td>158,40</td>
        </tr>
        <tr>
            <td>2.826,66 — 3.751,05</td>
            <td>15%</td>
            <td>370,40</td>
        </tr>
        <tr>
            <td>3.751,06 — 4.664,68</td>
            <td>22,5%</td>
            <td>651,73</td>
        </tr>
        <tr>
            <td>acima de 4.664,68</td>
            <td>27,5%</td>
            <td>884,96</td>
        </tr>
    </table>

    Após deduzir contribuições como o INSS e dependentes, a base de cálculo é enquadrada em faixas salariais, com cada uma possuindo uma alíquota e dedução específicas. Aplica-se a alíquota referente à faixa salarial, subtraindo-se a dedução relacionada para encontrar o valor do IRRF devido. Este valor é retido pelo empregador e repassado ao governo federal.

    Fonte tabela: [gov.br...](https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda/tabelas/2023)


- #### 13º Salário
    Na CLT, o funcionário tem direito à um 13º salário, que é pago em duas parcelas no final do ano. A primeira parcela é sem descontos e paga entre fevereiro e novembro, a segunda é paga em dezembro, e é aplicado os descontos do INSS e IRRF. Na prática, é um salário adicional com os descontos legais.

- #### Férias
    Também por lei, sob o regime CLT, o trabalhor tem direito à 30 dias de férias remuneradas após 12 meses de trabalho, com um valor adicional de 1/3. O INSS e IRRF são calculados em cima do valor da soma.

- #### Vale Transporte
    Obrigatório, exceto quando home office.

### Valores obrigatórios PJ:

- #### TODO
    https://www8.receita.fazenda.gov.br/SimplesNacional/Documentos/Pagina.aspx?id=3


### Outros benefícios / remunerações:

- #### Vale Alimentação / Vale Refeição

- #### PLR (profit sharing), PPR (desempenho e metas) ou simplesmente bônus
    Remuneração variável oferecida por várias empresas.

    Ex: 1 salário bônus    
    PLR -> salário *x* 1.0

    Ex: 3.5 salários bônus    
    PLR -> salário *x* 3.5

- #### 14º Salário
    Salário adicional ao fim do ano. Também conhecido Abono Assiduidade em algumas empresas.

- #### Ajuda de custo
    Valor mensal ofertado para funcionários em home office.

- #### Auxílio educação
    Voucher ou valor em dinheiro para o funcionário comprar livros, cursos, certificações, etc.

    Obs: as remunerações adicionais citadas, quando CLT, não são consideradas no cálculo do INSS e IRRF mensal.

## Assets utilizados

<table>
    <tr>
        <td><img src="./src/assets/images/profit.png" width="24" height="24"/></td>
        <td><a target="_blank" href="https://www.flaticon.com/free-icon/profit_6020518">Profit</a> - Uniconlabs / Flaticon</td>
    </tr>
    <tr>
        <td><img src="./src/assets/images/icons8-sun.svg" width="24" height="24"/></td>
        <td><a target="_blank" href="https://icons8.com/icon/15352/sun">Sun</a> - Icons8</td>
    </tr>
    <tr>
        <td><img src="./src/assets/images/icons8-moon-48.png" width="24" height="24"/></td>
        <td><a target="_blank" href="https://icons8.com/icon/OvZGKMO8vAju/moon">Moon</a> - Icons8</td>
    </tr>
    <tr>
        <td><img src="./src/assets/images/github-mark.svg" width="24" height="24"/></td>
        <td rowspan="2"><a target="_blank" href="https://github.com/logos">Invertocat</a> - GitHub</td>
    </tr>
    <tr>
        <td><img src="./src/assets/images/github-mark-white.svg" width="24" height="24"/></td>
    </tr>
    <tr>
        <td colspan="2"><a target="_blank" href="https://fonts.google.com/specimen/Gabarito">Gabarito</a> - Google Fonts</td>
    </tr>
</table>

## Licença

Este projeto é licenciado sob a licença <a href="https://www.gnu.org/licenses/gpl-3.0.html" target="_blank">GNU GPLv3</a>.
