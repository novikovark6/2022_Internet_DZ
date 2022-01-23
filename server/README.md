#Устанавливаем python и pip

1) python3 --version //Проверяем
    ### Если не установлен
    1.1 sudo apt install python3 //Устанавливаем


2) pip3 --version //Проверяем
    ### Если не установлен
    1.1 sudo apt -y install python3-pip //Устанавливаем

#Создаём и настраиваем среду

1) python3 -m venv venv //Создаём
2) source venv/bin/activate //Активируем
3) pip install --upgrade pip // Обновляем pip
4) pip install -r requarements.txt // Устанавливаем пакеты для работы нашего приложения


#Запускаем приложение(из под виртуального окружения)

1) source venv/bin/activate //Заходим в созданное ранее виртуальное окружение
2) python manage.py makemigrations //Создаём миграции
3) python manage.py migrate //Проводим миграции
4) python manage.py runserver //приложение запущенно на 8000 порту


