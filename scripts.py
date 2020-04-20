import requests

headers = {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMWIxMDEyODU2MGIzZTRmYTJiMWUzMTY1OTQ4YmQ1MyIsInN1YiI6IjVkNTUyYTBiYmM4NjU3NGIzNjJiZTMyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HUWPGPqnJbEdM1smasewVvnNBk87Ii9BG7OjVcNQl5g',
    'Content-Type': 'application/json;charset=utf-8',
}

for i in range(10000):
    print(i)
    response = requests.get('https://api.themoviedb.org/3/tv/{}'.format(i), headers=headers)
    print (response.text)