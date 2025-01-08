<script>
			document.addEventListener('DOMContentLoaded', function () {
			const reveals = document.querySelectorAll('.revealE, .revealB, .revealD, .connta');
			const delay = 20; 

			const revealOnScroll = () => {
				const windowHeight = window.innerHeight;

				reveals.forEach((reveal, index) => {
					const revealTop = reveal.getBoundingClientRect().top;

					if (revealTop < windowHeight - 50 && revealTop > 0) {
					
						setTimeout(() => {
							reveal.classList.add('visible');
						}, index * delay); 
					} else {
					
						reveal.classList.remove('visible');
					}
				});
			};
			window.addEventListener('scroll', revealOnScroll);
			revealOnScroll();
		});
		</script>
