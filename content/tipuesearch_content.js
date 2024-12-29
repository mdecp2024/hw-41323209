var tipuesearch = {"pages": [{'title': 'About', 'text': '國立虎尾科技大學機械設計工程系 \n National Formosa University \n Department of Mechanical Design Engineering \n cp2024 計算機程式 \n 課程教材: \n Learn Python with Jupyter  ( site ,  ebook ) \n 教育版帳號\xa0microsoftonline 登入點:\xa0 https://login.microsoftonline.com/ \n Teams 線上教學: \n 以 "學號@nfu.edu.tw" 登入  https://login.microsoftonline.com/  Office 365 \n Teams 團隊代碼:  ldodwua \n 個人倉儲: \xa0 https://mdecp2024.github.io/hw-41323209/ \n 個人網站: https://github.com/mdecp2024/hw-41323209 \n 其他資訊: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n', 'tags': '', 'url': 'About.html'}, {'title': 'Attendance', 'text': '出席 (10%) - 自行舉證評分 \n 自行利用 Github commits 提交記錄評分. \n', 'tags': '', 'url': 'Attendance.html'}, {'title': 'HW 1', 'text': '主題: 基於瀏覽器的分散式版次管理與整合程式開發環境 (10%) \n USB 隨身碟: \n 下載  python_2025_lite.7z  (428 MB, 解開壓縮後約 1.5 GB) \n Jupyter \n What are Github and Codespaces? \n Hello World - GitHub Docs \n 利用包含學號的字串作為帳號, 申請免費使用 Github. \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 1 \n \n PART 1: Creating the basics 資料整理 (10%) \n 啟動可攜程式系統後, 在命令列中: \n y:\\>cd notebook \n y:\\notebook>jupyter lab --collaborative \n 進入  01_string_input_print.ipynb  練習如何修改 PART1 notebook 後存檔, 上傳至作業倉儲中的 downloads 目錄後, 透過  https://nbviewer.org/  將已經提交的  01_string_input_print.ipynb , 嵌入下列網頁中. \n \n 上列 iframe 標註的 html 語法: \n <iframe width="600" height="400" src="https://nbviewer.org/urls/mde.tw/cp2024_hw/downloads/01_string_input_print.ipynb"></iframe> \n 完成上述流程整理後, 請將 HW1 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 1.html'}, {'title': 'HW11', 'text': 'https://youtu.be/vdiXybusZvo \n # 圓心座標 (5, 5)，半徑 4\ncenter_x = 5\ncenter_y = 5\nradius = 4\nsize = 10 # 10x10 的字形區域\n\n# 遍歷每個位置，判斷是否在圓內\nfor y in range(size):\n\xa0 \xa0 for x in range(size):\n\xa0 \xa0 \xa0 \xa0 # 計算點 (x, y) 距離圓心的距離\n\xa0 \xa0 \xa0 \xa0 distance = (x - center_x) ** 2 + (y - center_y) ** 2\n\xa0 \xa0 \xa0 \xa0 # 若距離小於等於半徑的平方，則印出星號\n\xa0 \xa0 \xa0 \xa0 if distance <= radius ** 2:\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 print(\'*\', end=\'\')\n\xa0 \xa0 \xa0 \xa0 else:\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 print(\' \', end=\'\')\n\xa0 \xa0 print() # 換行 \n HW11 \n n = 11 # 總共的行數\nspace = \'_\'\ncenter = n//2\n#print(center)\n\nfor y in range(n):\n\xa0 \xa0 for x in range(n):\n\xa0 \xa0 \xa0 \xa0 print("(", x, ",", y, ")") \n 圖框 \n', 'tags': '', 'url': 'HW11.html'}, {'title': 'W13', 'text': '\n <!-- 引入 Brython 程式庫 -->\n<script src="./../cmsimde/static/brython.js"></script>\n<script src="./../cmsimde/static/brython_stdlib.js"></script>\n<!-- 啟動 Brython -->\n<script>// <![CDATA[\nwindow.onload = function() {\n    brython({debug:1, pythonpath:[\'./../cmsimde/static/\', \'../../downloads/py/\']});\n}\n// ]]></script>\n<!-- 設置容器 -->\n<div id="brython div1"></div>\n<!-- 利用 Brython 繪圖 -->\n<script type="text/python">// <![CDATA[\nfrom browser import html\nfrom browser import document as doc\n\n# 利用 HTML 建立 canvas 並定義特性\ncanvas = html.CANVAS(width=600, height=600)\nbrython_div = doc["brython div1"]\nbrython_div <= canvas\nctx = canvas.getContext("2d")\n\n# 畫兩個矩形 (紅色邊框)\nctx.strokeStyle = \'red\'\nctx.beginPath()\nctx.rect(100, 100, 200, 200)\nctx.rect(200, 200, 200, 200)\nctx.stroke()\n\n# 畫對角線 (藍色)\nctx.strokeStyle = \'blue\'\nctx.beginPath()\nctx.moveTo(100, 100)\nctx.lineTo(300, 300)\nctx.stroke()\n\n# 畫兩個圓形 (黑色)\nctx.strokeStyle = \'black\'\nctx.beginPath()\nctx.arc(200, 200, 141.4, 0, 2 * 3.14)\nctx.stroke()\nctx.beginPath()\nctx.arc(300, 300, 141.4, 0, 2 * 3.14)\nctx.stroke()\n\n\n# 儲存幾何參數\nshapes = {\n    "circle1": (200, 200, 141.4),\n    "circle2": (300, 300, 141.4),\n    "square1": (100, 100, 300, 300),\n    "square2": (200, 200, 400, 400),\n}\n\n# 簡化的判定函式\ndef is_in_circle(x, y, cx, cy, r):\n    return (x - cx) ** 2 + (y - cy) ** 2 < r ** 2\n\ndef is_in_square(x, y, x1, y1, x2, y2):\n    return x1 <= x <= x2 and y1 <= y <= y2\n\n# 根據點判定區域並返回顏色\ndef get_region_color(x, y):\n    c1 = is_in_circle(x, y, *shapes["circle1"])\n    c2 = is_in_circle(x, y, *shapes["circle2"])\n    s1 = is_in_square(x, y, *shapes["square1"])\n    s2 = is_in_square(x, y, *shapes["square2"])\n\n    # 不在任何圓內\n    if not c1 and not c2:\n        return None\n\n    # 同時在兩圓內的區域分割，這裡會根據交集劃分 4 個區域\n    if c1 and c2:\n        # 依照相對於對角線的上下、左右位置分割區域，給予不同顏色\n        if x < 250 and y < 250:\n            return "#2894FF"  # 左上區域\n        elif x >= 250 and y < 250:\n            return "#66B3FF"  # 右上區域\n        elif x < 250 and y >= 250:\n            return "#00FFFF"  # 左下區域\n        elif x >= 250 and y >= 250:\n            return "#80FFFF"  # 右下區域\n\n    # 第一個圓的判定\n    if c1:\n        if s1:\n            return "#28004D" if y < x else "#96FED1"\n        if y < shapes["square1"][1]:\n            return "#00EC00"  \n        if y > shapes["square1"][3]:\n            return "#53FF53"  \n        if x < shapes["square1"][0]:\n            return "#02DF82"  \n        if x > shapes["square1"][2]:\n            return "#1AFD9C"  \n\n    # 第二個圓的判定\n    if c2:\n        if s2:\n            return "#006030"  \n        if y < shapes["square2"][1]:\n            return "#5B4B00"  \n        if y > shapes["square2"][3]:\n            return "#A23400"  \n        if x < shapes["square2"][0]:\n            return "#82D900"  \n        if x > shapes["square2"][2]:\n            return "#6FB7B7"  \n\n    return "#01B468"  # 默認顏色\n\n# 繪製掃描點並著色\ndef scan_and_draw():\n    step = 1  # 減小步長提升細膩程度\n    for y in range(0, canvas.height, step):\n        for x in range(0, canvas.width, step):\n            color = get_region_color(x, y)\n            if color:\n                ctx.fillStyle = color\n                ctx.fillRect(x, y, step, step)  # 使用細小矩形填充\n\n# 開始掃描和著色\nscan_and_draw()\n\n# 畫兩個矩形 (紅色邊框)\nctx.strokeStyle = \'red\'\nctx.beginPath()\nctx.rect(100, 100, 200, 200)\nctx.rect(200, 200, 200, 200)\nctx.stroke()\n\n# 畫對角線 (藍色)\nctx.strokeStyle = \'blue\'\nctx.beginPath()\nctx.moveTo(100, 100)\nctx.lineTo(300, 300)\nctx.stroke()\n\n# 畫兩個圓形 (黑色)\nctx.strokeStyle = \'black\'\nctx.beginPath()\nctx.arc(200, 200, 141.4, 0, 2 * 3.14)\nctx.stroke()\nctx.beginPath()\nctx.arc(300, 300, 141.4, 0, 2 * 3.14)\nctx.stroke()\n// ]]></script> \n \n  利用 Brython 繪圖  \n \n', 'tags': '', 'url': 'W13.html'}, {'title': 'W14', 'text': '\n from browser import html\nfrom browser import document as doc\nimport random\n \n# 定義一個函式來初始化畫布\ndef initialize_canvas(canvas_width=400, canvas_height=400, id="brython_div1"):\n    # 創建 canvas 並設置寬度與高度\n    canvas = html.CANVAS(width=canvas_width, height=canvas_height)\n    brython_div = doc[id]\n    brython_div <= canvas\n     \n    # 獲取 canvas 的 2D 上下文\n    ctx = canvas.getContext("2d")\n     \n    return canvas, ctx\n \n# 定義一個隨機顏色生成函式\ndef random_color_generator():\n    r = random.randint(0, 255)\n    g = random.randint(0, 255)\n    b = random.randint(0, 255)\n    return f"rgb({r}, {g}, {b})"\n \n# 判斷點 (px, py) 是否在圓內\ndef is_point_in_circle(px, py, cx, cy, r):\n    return (px - cx) ** 2 + (py - cy) ** 2 <= r ** 2\n \n# 使用者設定的圓心座標和半徑，並進行掃描線填充\ndef draw_circles(x1, y1, r1, x2, y2, r2, x3, y3, r3):\n    # 初始化畫布\n    canvas, ctx = initialize_canvas(400, 400)\n     \n    # 清除畫布\n    ctx.clearRect(0, 0, canvas.width, canvas.height)\n     \n    # 顏色區域存儲\n    color_dict = {}\n \n    # 使用掃描線方法填充區域\n    for py in range(0, canvas.height):\n        # 逐行掃描，判斷每個點是否在圓內\n        current_color = None  # 當前掃描線區域的顏色\n        for px in range(0, canvas.width):\n            in_circle1 = is_point_in_circle(px, py, x1, y1, r1)\n            in_circle2 = is_point_in_circle(px, py, x2, y2, r2)\n            in_circle3 = is_point_in_circle(px, py, x3, y3, r3)\n             \n            if in_circle1 and in_circle2 and in_circle3:\n                # 交集區域\n                if "intersection" not in color_dict:\n                    color_dict["intersection"] = random_color_generator()\n                current_color = color_dict["intersection"]\n            elif in_circle1 and in_circle2:\n                # 只在圓1與圓2的交集區域\n                if "circle1_circle2" not in color_dict:\n                    color_dict["circle1_circle2"] = random_color_generator()\n                current_color = color_dict["circle1_circle2"]\n            elif in_circle2 and in_circle3:\n                # 只在圓2與圓3的交集區域\n                if "circle2_circle3" not in color_dict:\n                    color_dict["circle2_circle3"] = random_color_generator()\n                current_color = color_dict["circle2_circle3"]\n            elif in_circle1 and in_circle3:\n                # 只在圓1與圓3的交集區域\n                if "circle1_circle3" not in color_dict:\n                    color_dict["circle1_circle3"] = random_color_generator()\n                current_color = color_dict["circle1_circle3"]\n            elif in_circle1:\n                # 只在圓1內\n                if "circle1" not in color_dict:\n                    color_dict["circle1"] = random_color_generator()\n                current_color = color_dict["circle1"]\n            elif in_circle2:\n                # 只在圓2內\n                if "circle2" not in color_dict:\n                    color_dict["circle2"] = random_color_generator()\n                current_color = color_dict["circle2"]\n            elif in_circle3:\n                # 只在圓3內\n                if "circle3" not in color_dict:\n                    color_dict["circle3"] = random_color_generator()\n                current_color = color_dict["circle3"]\n            else:\n                # 點不在圓內，畫外區域\n                current_color = "white"  # 背景色白色\n \n            # 填充顏色\n            ctx.fillStyle = current_color\n            ctx.fillRect(px, py, 1, 1)  # 填充一個像素\n \n# 三個圓心和半徑的設定\n# 假設三個圓心分佈成等邊三角形的頂點，並設置它們的半徑\nradius = 100  # 圓的半徑\nx1, y1 = 150, 200  # 圓1 圓心\nx2, y2 = 250, 200  # 圓2 圓心\nx3, y3 = 200, 100  # 圓3 圓心\n \n# 呼叫畫圓函式\ndraw_circles(x1, y1, radius, x2, y2, radius, x3, y3, radius) \n \n  利用 Brython 繪圖  \n \n', 'tags': '', 'url': 'W14.html'}, {'title': 'w15', 'text': '題目一: 1累加到100 \n 題目二: 兩數之間總和 \n', 'tags': '', 'url': 'w15.html'}, {'title': 'w10', 'text': '題目一: \n \n \n \n 題目二: \n https://youtu.be/UQ5PDuwfSoM \n \n 題目三: \n 影片上限無法傳 \n \n \n \n \n \n \n', 'tags': '', 'url': 'w10.html'}, {'title': 'W5', 'text': "\n \n #help(range)\nfor i in range(1,5):\n\xa0\xa0\xa0\xa0print(i)\ndef print_pyramid(height):\n\xa0\xa0\xa0\xa0for i in range(height):\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0# 打印空格\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0print(' ' * (height - i - 1), end='')\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0# 打印星号\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0print('*' * (2 * i + 1))\n\xa0\n# 设置金字塔的高度\npyramid_height = 5\nprint_pyramid(pyramid_height)\n\n1\n2\n3\n4\n5\n6\n7\n8\n9\n1\n2\n3\n4\n\xa0\xa0\xa0\xa0*\n\xa0\xa0\xa0***\n\xa0\xa0*****\n\xa0*******\n*********\n \n", 'tags': '', 'url': 'W5.html'}, {'title': 'w6', 'text': '\n 下載 python_2025_lite.7z（可攜程式環境） \n 下載 zmq_remote_api ex cube_triangle.7z（税用 Python 控制模擬場景中的物件） \n 進入可攜程式環境中 data/CoppeliaSim 目錄，開啟 coppeliasim.exe（機電整合模擬程式，原始碼） \n 啟動可攜程式環境，雙點擊 start_ipv6.bat，系統會啟動四個命令列，兩個 SciTE 編輯器 \n 執行場景控制程式前，先處理操作系統的防火牆，將下列指令存為， bat 檔案後，以管理員身袋執行，以便開啟 23000-23050 號進出： \n netsh advfirewall firewall add rule name="allow _23000-23050™ dir=in action=allow protocol=TCP localport=23000-23050 netsh advfirewall firewall add rule name="allow_23000-23050" dir=out action=allow protocol=TCP localport=23000-23050\xa0 \n 開啟 CoppeliaSim 中的視覺串流伺服器：Modules - Connectivity - Visualization stream\xa0 \n 利用 SCITE 開啟 put_cubes_into_scene__1.py， 利用 Tools -Go 執行操控程式 \n 使用者可以透過瀏覽器,以模擬場景所在電腦的IP, 且埠號為23020 觀看模擬場 \n \n \n \n from coppeliasim_zmqremoteapi_client import RemoteAPIClient\nimport time\nimport keyboard\n\xa0\n# 利用 zmqRemoteAPI 以 23000 對場景伺服器進行連線\nclient = RemoteAPIClient(\'172.20.10.2\', 23000)\n# 以 getObject 方法取得場景物件\nsim = client.getObject(\'sim\')\nbox = sim.getObject(\'/box\')\n\xa0\n# 啟動模擬\nsim.startSimulation()\n\xa0\n# 設定立方體的尺寸和初始位置\ncube_size = 0.2\xa0 # 20 cm\nspacing = 0.5\xa0 # 50 cm 之間的距離（可根據需求調整）\n\xa0\n# 擺放立方體的行數和每行的數量\nrows = 5\xa0 # 從第 1 行到第 5 行\ncubes_in_row = [1, 3, 5, 7, 9]\xa0 # 每行立方體的數量\n\xa0\n# 在正的 Y 方向擺放立方體\nfor row in range(rows):\n\xa0\xa0\xa0\xa0# 計算每行的起始 x 位置，讓其對稱\n\xa0\xa0\xa0\xa0start_row_x = - (cubes_in_row[row] - 1) * spacing / 2\n\xa0\xa0\xa0\xa0\xa0\n\xa0\xa0\xa0\xa0for col in range(cubes_in_row[row]):\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0# 計算每個立方體的位置\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0x_position = start_row_x + col * spacing\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0y_position = row * spacing\xa0 # 垂直方向上每行間距\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0# 建立立方體\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0cube_handle = sim.createPrimitiveShape(sim.primitiveshape_cuboid, [cube_size, cube_size, cube_size], 0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0sim.setObjectPosition(cube_handle, -1, [x_position, y_position, cube_size / 2])\xa0 # z 方向上升到立方體的中心\n\xa0\n# 在負的 Y 方向擺放立方體\nfor row in range(rows):\n\xa0\xa0\xa0\xa0# 計算每行的起始 x 位置，讓其對稱\n\xa0\xa0\xa0\xa0start_row_x = - (cubes_in_row[row] - 1) * spacing / 2\n\xa0\xa0\xa0\xa0\xa0\n\xa0\xa0\xa0\xa0for col in range(cubes_in_row[row]):\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0# 計算每個立方體的位置\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0x_position = start_row_x + col * spacing\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0y_position = -row * spacing\xa0 # 負的 Y 方向\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0# 建立立方體\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0cube_handle = sim.createPrimitiveShape(sim.primitiveshape_cuboid, [cube_size, cube_size, cube_size], 0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0sim.setObjectPosition(cube_handle, -1, [x_position, y_position, cube_size / 2])\xa0 # z 方向上升到立方體的中心\n\xa0\n# 完成立方體的擺放\nprint("立方體已成功擺放!")\n\xa0\n# 設定主迴圈\nwhile True:\n\xa0\xa0\xa0\xa0# 在這裡可以進行其他模擬操作\n\xa0\xa0\xa0\xa0time.sleep(0.1)\xa0 # 確保循環不會過快\n\xa0\n\xa0\xa0\xa0\xa0if keyboard.is_pressed(\'q\'):\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0# 可以按下 q 鍵跳出重複執行迴圈\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0break\n\xa0\n# 終止模擬\nsim.stopSimulation() \n \n \n', 'tags': '', 'url': 'w6.html'}, {'title': 'w7', 'text': '\n', 'tags': '', 'url': 'w7.html'}, {'title': 'HW 2', 'text': '主題: Python 的數列、判斷式與重複迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 2 and Part 3 \n \n 延續 HW 1 網頁資料整理與程式練習方法, 整理下列內容 (20%): \n PART 2: Introduction to lists and if/else statements \n PART 3: Introduction to the for loop \n 完成上述流程整理後, 請將 HW2 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 2.html'}, {'title': 'HW 2 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 2 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 2 Exam.html'}, {'title': 'HW 16.1Exam', 'text': 'Exam16.1', 'tags': '', 'url': 'HW 16.1Exam.html'}, {'title': 'HW 3', 'text': '主題: Python 的數字、演算法與迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 4 and Part 5 \n 完成上述流程整理後, 請將 HW3 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 3.html'}, {'title': 'HW 3 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 3 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 3 Exam.html'}, {'title': 'HW 16.2 Exam', 'text': '', 'tags': '', 'url': 'HW 16.2 Exam.html'}, {'title': 'HW 4', 'text': '主題: 利用 Python 控制機電模擬系統 (20%) \n 利用\xa0 https://solvespace.com/ \xa0建立機械系統零組件 \n 利用  CoppeliaSim  建立機電模擬系統 \n 利用  Python  跨網路控制瀏覽器上的機電模擬系統 \n 範例: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n 完成上述流程整理後, 請將 HW4 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 4.html'}, {'title': 'HW 4 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 4 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 4 Exam.html'}, {'title': 'Final Report', 'text': '期末口頭與書面專題報告 (20%) \n 期末口頭專題報告影片: \n ...... \n 期末書面專題報告檔案 (pdf): \n ...... \n 電腦輔助設計與實習課程總結心得: \n ...... \n 期末報告自評成績: \n 完成上述流程後, 請將 Final Report 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'Final Report.html'}, {'title': 'Brython', 'text': '從 1 累加到 100: \n 1 add to 100 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};