document.addEventListener("DOMContentLoaded", function() {
    var tabLinks = document.querySelectorAll('.tabmenu > li > a');
    
    tabLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            
            var parentListItem = this.parentElement;
            
            // 현재 클릭된 요소에 'active' 클래스 추가, 형제 요소들에서 'active' 클래스 제거
            parentListItem.classList.add('active');
            var siblings = getSiblings(parentListItem);
            siblings.forEach(function(sibling) {
                sibling.classList.remove('active');
            });
        });
    });
});

// 형제 요소를 가져오는 함수
function getSiblings(elem) {
    var siblings = [];
    var sibling = elem.parentNode.firstChild;
    for (; sibling; sibling = sibling.nextSibling) {
        if (sibling.nodeType === 1 && sibling !== elem) {
            siblings.push(sibling);
        }
    }
    return siblings;
}

const modalOpenButton = document.getElementById('modalOpenButton');
const modalCloseButton = document.getElementById('modalCloseButton');
const modal = document.getElementById('modalContent');

modalOpenButton.addEventListener('click', () => {
  modal.classList.remove('hidden');
});

modalCloseButton.addEventListener('click', () => {
  modal.classList.add('hidden');
});