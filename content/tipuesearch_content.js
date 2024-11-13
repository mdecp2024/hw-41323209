var tipuesearch = {"pages": [{'title': 'About', 'text': '國立虎尾科技大學機械設計工程系 \n National Formosa University \n Department of Mechanical Design Engineering \n cp2024 計算機程式 \n 課程教材: \n Learn Python with Jupyter  ( site ,  ebook ) \n 教育版帳號\xa0microsoftonline 登入點:\xa0 https://login.microsoftonline.com/ \n Teams 線上教學: \n 以 "學號@nfu.edu.tw" 登入  https://login.microsoftonline.com/  Office 365 \n Teams 團隊代碼:  ldodwua \n 個人倉儲: \xa0 https://mdecp2024.github.io/hw-41323209/ \n 個人網站: https://github.com/mdecp2024/hw-41323209 \n 其他資訊: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n', 'tags': '', 'url': 'About.html'}, {'title': 'Attendance', 'text': '出席 (10%) - 自行舉證評分 \n 自行利用 Github commits 提交記錄評分. \n', 'tags': '', 'url': 'Attendance.html'}, {'title': 'HW 1', 'text': '主題: 基於瀏覽器的分散式版次管理與整合程式開發環境 (10%) \n USB 隨身碟: \n 下載  python_2025_lite.7z  (428 MB, 解開壓縮後約 1.5 GB) \n Jupyter \n What are Github and Codespaces? \n Hello World - GitHub Docs \n 利用包含學號的字串作為帳號, 申請免費使用 Github. \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 1 \n \n PART 1: Creating the basics 資料整理 (10%) \n 啟動可攜程式系統後, 在命令列中: \n y:\\>cd notebook \n y:\\notebook>jupyter lab --collaborative \n 進入  01_string_input_print.ipynb  練習如何修改 PART1 notebook 後存檔, 上傳至作業倉儲中的 downloads 目錄後, 透過  https://nbviewer.org/  將已經提交的  01_string_input_print.ipynb , 嵌入下列網頁中. \n \n 上列 iframe 標註的 html 語法: \n <iframe width="600" height="400" src="https://nbviewer.org/urls/mde.tw/cp2024_hw/downloads/01_string_input_print.ipynb"></iframe> \n 完成上述流程整理後, 請將 HW1 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 1.html'}, {'title': 'HW 1 Exam', 'text': '', 'tags': '', 'url': 'HW 1 Exam.html'}, {'title': 'w10', 'text': '題目一: \n \n \n \n 題目二: \n https://youtu.be/UQ5PDuwfSoM \n \n 題目三: \n 影片上限無法傳 \n \n \n', 'tags': '', 'url': 'w10.html'}, {'title': 'W5', 'text': "\n \n #help(range)\nfor i in range(1,5):\n\xa0\xa0\xa0\xa0print(i)\ndef print_pyramid(height):\n\xa0\xa0\xa0\xa0for i in range(height):\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0# 打印空格\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0print(' ' * (height - i - 1), end='')\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0# 打印星号\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0print('*' * (2 * i + 1))\n\xa0\n# 设置金字塔的高度\npyramid_height = 5\nprint_pyramid(pyramid_height)\n\n1\n2\n3\n4\n5\n6\n7\n8\n9\n1\n2\n3\n4\n\xa0\xa0\xa0\xa0*\n\xa0\xa0\xa0***\n\xa0\xa0*****\n\xa0*******\n*********\n \n", 'tags': '', 'url': 'W5.html'}, {'title': 'w6', 'text': '\n 下載 python_2025_lite.7z（可攜程式環境） \n 下載 zmq_remote_api ex cube_triangle.7z（税用 Python 控制模擬場景中的物件） \n 進入可攜程式環境中 data/CoppeliaSim 目錄，開啟 coppeliasim.exe（機電整合模擬程式，原始碼） \n 啟動可攜程式環境，雙點擊 start_ipv6.bat，系統會啟動四個命令列，兩個 SciTE 編輯器 \n 執行場景控制程式前，先處理操作系統的防火牆，將下列指令存為， bat 檔案後，以管理員身袋執行，以便開啟 23000-23050 號進出： \n netsh advfirewall firewall add rule name="allow _23000-23050™ dir=in action=allow protocol=TCP localport=23000-23050 netsh advfirewall firewall add rule name="allow_23000-23050" dir=out action=allow protocol=TCP localport=23000-23050\xa0 \n 開啟 CoppeliaSim 中的視覺串流伺服器：Modules - Connectivity - Visualization stream\xa0 \n 利用 SCITE 開啟 put_cubes_into_scene__1.py， 利用 Tools -Go 執行操控程式 \n 使用者可以透過瀏覽器,以模擬場景所在電腦的IP, 且埠號為23020 觀看模擬場 \n \n \n \n from coppeliasim_zmqremoteapi_client import RemoteAPIClient\nimport time\nimport keyboard\n\xa0\n# 利用 zmqRemoteAPI 以 23000 對場景伺服器進行連線\nclient = RemoteAPIClient(\'172.20.10.2\', 23000)\n# 以 getObject 方法取得場景物件\nsim = client.getObject(\'sim\')\nbox = sim.getObject(\'/box\')\n\xa0\n# 啟動模擬\nsim.startSimulation()\n\xa0\n# 設定立方體的尺寸和初始位置\ncube_size = 0.2\xa0 # 20 cm\nspacing = 0.5\xa0 # 50 cm 之間的距離（可根據需求調整）\n\xa0\n# 擺放立方體的行數和每行的數量\nrows = 5\xa0 # 從第 1 行到第 5 行\ncubes_in_row = [1, 3, 5, 7, 9]\xa0 # 每行立方體的數量\n\xa0\n# 在正的 Y 方向擺放立方體\nfor row in range(rows):\n\xa0\xa0\xa0\xa0# 計算每行的起始 x 位置，讓其對稱\n\xa0\xa0\xa0\xa0start_row_x = - (cubes_in_row[row] - 1) * spacing / 2\n\xa0\xa0\xa0\xa0\xa0\n\xa0\xa0\xa0\xa0for col in range(cubes_in_row[row]):\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0# 計算每個立方體的位置\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0x_position = start_row_x + col * spacing\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0y_position = row * spacing\xa0 # 垂直方向上每行間距\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0# 建立立方體\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0cube_handle = sim.createPrimitiveShape(sim.primitiveshape_cuboid, [cube_size, cube_size, cube_size], 0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0sim.setObjectPosition(cube_handle, -1, [x_position, y_position, cube_size / 2])\xa0 # z 方向上升到立方體的中心\n\xa0\n# 在負的 Y 方向擺放立方體\nfor row in range(rows):\n\xa0\xa0\xa0\xa0# 計算每行的起始 x 位置，讓其對稱\n\xa0\xa0\xa0\xa0start_row_x = - (cubes_in_row[row] - 1) * spacing / 2\n\xa0\xa0\xa0\xa0\xa0\n\xa0\xa0\xa0\xa0for col in range(cubes_in_row[row]):\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0# 計算每個立方體的位置\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0x_position = start_row_x + col * spacing\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0y_position = -row * spacing\xa0 # 負的 Y 方向\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0# 建立立方體\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0cube_handle = sim.createPrimitiveShape(sim.primitiveshape_cuboid, [cube_size, cube_size, cube_size], 0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0sim.setObjectPosition(cube_handle, -1, [x_position, y_position, cube_size / 2])\xa0 # z 方向上升到立方體的中心\n\xa0\n# 完成立方體的擺放\nprint("立方體已成功擺放!")\n\xa0\n# 設定主迴圈\nwhile True:\n\xa0\xa0\xa0\xa0# 在這裡可以進行其他模擬操作\n\xa0\xa0\xa0\xa0time.sleep(0.1)\xa0 # 確保循環不會過快\n\xa0\n\xa0\xa0\xa0\xa0if keyboard.is_pressed(\'q\'):\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0# 可以按下 q 鍵跳出重複執行迴圈\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0break\n\xa0\n# 終止模擬\nsim.stopSimulation() \n \n \n', 'tags': '', 'url': 'w6.html'}, {'title': 'w7', 'text': '\n', 'tags': '', 'url': 'w7.html'}, {'title': 'HW 2', 'text': '主題: Python 的數列、判斷式與重複迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 2 and Part 3 \n \n 延續 HW 1 網頁資料整理與程式練習方法, 整理下列內容 (20%): \n PART 2: Introduction to lists and if/else statements \n PART 3: Introduction to the for loop \n 完成上述流程整理後, 請將 HW2 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 2.html'}, {'title': 'HW 2 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 2 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 2 Exam.html'}, {'title': 'HW 3', 'text': '主題: Python 的數字、演算法與迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 4 and Part 5 \n 完成上述流程整理後, 請將 HW3 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 3.html'}, {'title': 'HW 3 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 3 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 3 Exam.html'}, {'title': 'HW 4', 'text': '主題: 利用 Python 控制機電模擬系統 (20%) \n 利用\xa0 https://solvespace.com/ \xa0建立機械系統零組件 \n 利用  CoppeliaSim  建立機電模擬系統 \n 利用  Python  跨網路控制瀏覽器上的機電模擬系統 \n 範例: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n 完成上述流程整理後, 請將 HW4 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 4.html'}, {'title': 'HW 4 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 4 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 4 Exam.html'}, {'title': 'Final Report', 'text': '期末口頭與書面專題報告 (20%) \n 期末口頭專題報告影片: \n ...... \n 期末書面專題報告檔案 (pdf): \n ...... \n 電腦輔助設計與實習課程總結心得: \n ...... \n 期末報告自評成績: \n 完成上述流程後, 請將 Final Report 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'Final Report.html'}, {'title': 'Brython', 'text': '從 1 累加到 100: \n 1 add to 100 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};