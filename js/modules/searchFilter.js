export default function searchFilter(searcher, cards) {
  const $searcher = document.getElementById(searcher),
  $cards = document.querySelectorAll(cards);

  document.addEventListener('input', e => {
    if (e.target === $searcher) {
      $cards.forEach(card => card.textContent.toLowerCase().includes(e.target.value)
      ? card.classList.remove('filter') 
      : card.classList.add('filter')
      );
    }
  });

};