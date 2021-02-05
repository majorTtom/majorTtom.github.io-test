function showContent(link) {

		var cont = document.getElementById('ajax');
		var loading = document.getElementById('loading');
		
		
		
		cont.innerHTML = '<li style="position: absolute;width: 100%;background: #161515;height: 40vh;display: flex;justify-content: center;align-items: center;left:0;"><span style="animation: circleRotate 1s infinite;animation-duration: 1s;width: 70px;border-radius: 50%;height: 70px;border: 2px solid #fff;display: block;border-top: transparent;border-left: transparent;"></span></li>'; 

	

		var http = createRequestObject();					// создаем ajax-объект
		if( http ) {
			http.open('get', link);							// инициируем загрузку страницы
			http.onreadystatechange = function () {			// назначаем асинхронный обработчик события
				if(http.readyState == 4) {
					cont.innerHTML = http.responseText;		// присваиваем содержимое
				}
			}
			http.send(null);    
		} else {
			document.location = link;	// если ajax-объект не удается создать, просто перенаправляем на адрес
		}
		
	}

	// создание ajax объекта
	function createRequestObject() {
		try { return new XMLHttpRequest() }
		catch(e) {
			try { return new ActiveXObject('Msxml2.XMLHTTP') }
			catch(e) {
				try { return new ActiveXObject('Microsoft.XMLHTTP') }
				catch(e) { return null; }
			}
		}
	}
	
	
	
	