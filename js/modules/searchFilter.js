const d = document,
c = console;
export default function searchFilter(searcher, cards) {
  const $searcher = d.getElementById(searcher),
  $cards = d.querySelectorAll(cards);

  d.addEventListener('input', e => {
    if (e.target === $searcher) {
      $cards.forEach(card => card.textContent.toLowerCase().includes(e.target.value)
      ? card.classList.remove('filter') 
      : card.classList.add('filter')
      );
    }
  });

};