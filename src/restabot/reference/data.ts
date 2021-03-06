export const referenceData = {
    intents: [
        {
            "tag": "pembuka",
            "inputs": ["hai", "halo","hi", "tes", "Hello"],
            "responses": ["Hai, aku Restabot siap membantu kamu untuk menemukan resep masakan Nusantara. \nBahan makanan apa yang kamu punya? Aku akan merekomendasikan beberapa menu masakkan Nusantara dari bahan makanan berikut ini: \nDaging Sapi ketik A \nDaging Ayam ketik B \nDaging Kambing ketik C \nIkan ketik D \nTelur Ayam ketik E \nTimun ketik F \nUdang ketik G \nNasi Putih ketik H \nMie ketik I \nJagung ketik J \nJantung Pisang ketik K \nTahu ketik L \nIga Sapi ketik M \nIga kambing ketik N \nKaki Sapi ketik O \nNangka Muda ketik P \ningin melanjutkan? jika tidak, ketik 'tidak'"],
            "context": [""]
        },
        {
            "tag": "penutup",
            "inputs": ["terima kasih", "terima kasih sudah membantu"],
            "responses": ["sama sama", "senang bisa membantu kamu"],
            "context": [""]
        },
        {
            "tag": "penutup",
            "inputs": ["tidak", "tidak, terima kasih", "engga"],
            "responses": ["Okei, terima kasih sudah menggunakan Restabot"],
            "context": [""]
        },
        {
            "tag": "",
            "inputs": [],
            "responses": ["maaf aku tidak bisa memahami kata-kata anda", "maaf bisa diulangi lagi pertanyaannya", "kamu belum memberi pertanyaan"],
            "context": [""]
        },
        {
            "tag": "bahanA",
            "inputs": ["a"],
            "responses": ["Dari daging sapi Kamu bisa buat: \nrendang, rawon, bakso, sup konro, mie aceh, mie kocok, soto betawi, coto makasar, iga penyet, empal gentong, mie gomak \nKetik nama makanan yang ingin kamu masak, Aku akan memberikan resep nya \nIngin melanjutkan? jika tidal, ketik 'tidak'"],
            "context": [""]
        },
        {
            "tag": "bahanB",
            "inputs": ["b"],
            "responses": ["Dari daging ayam Kamu bisa buat: \nsate ayam, siomay, ayam taliwang, ayam betutu, soto banjar, rica rica ayam, ayam cicane, masak habang \nKetik nama makanan yang ingin kamu masak, Aku akan memberikan resep nya \nIngin melanjutkan? jika tidal, ketik 'tidak'"],
            "context": [""]
        },
        {
            "tag": "bahanC",
            "inputs": ["c"],
            "responses": ["Dari daging kambing Kamu bisa buat: \ntengkleng \nKetik nama makanan yang ingin kamu masak, Aku akan memberikan resep nya \nIngin melanjutkan? jika tidak, ketik 'tidak'"],
            "context": [""]
        },
        {
            "tag": "bahanD",
            "inputs": ["d"],
            "responses": ["Dari ikan Kamu bisa buat: \npempek, sate bandeng, pendap, juhu singkah, sup ikan jantung pisang, binte biluhuta, gulai ikan patin, seruit \nKetik nama makanan yang ingin kamu masak, Aku akan memberikan resep nya \nIngin melanjutkan? jika tidal, ketik 'tidak'"],
            "context": [""]
        },
        {
            "tag": "bahanE",
            "inputs": ["e"],
            "responses": ["Dari telur ayam Kamu bisa buat: \nkerak telor, nasi goreng jawa, tahu tek, seblak, mie celor, pempek, bakso, sate bandeng, siomay \nKetik nama makanan yang ingin kamu masak, Aku akan memberikan resep nya \nIngin melanjutkan? jika tidal, ketik 'tidak'"],
            "context": [""]
        },
        {
            "tag": "bahanF",
            "inputs": ["f"],
            "responses": ["Dari timun Kamu bisa buat: \nkaredok \nKetik nama makanan yang ingin kamu masak, Aku akan memberikan resep nya \nIngin melanjutkan? jika tidal, ketik 'tidak'"],
            "context": [""]
        },
        {
            "tag": "bahanG",
            "inputs": ["g"],
            "responses": ["Dari udang Kamu bisa buat: \nmie celor, binte biluhuta \nKetik nama makanan yang ingin kamu masak, Aku akan memberikan resep nya \nIngin melanjutkan? jika tidal, ketik 'tidak'"],
            "context": [""]
        },
        {
            "tag": "bahanH",
            "inputs": ["h"],
            "responses": ["Dari nasi Kamu bisa buat: \nnasi goreng jawa, bubur manado \nKetik nama makanan yang ingin kamu masak, Aku akan memberikan resep nya \nIngin melanjutkan? jika tidal, ketik 'tidak'"],
            "context": [""]
        },
        {
            "tag": "bahanI",
            "inputs": ["i"],
            "responses": ["Dari mie Kamu bisa buat: \nmie aceh, mie gomak, mie kocok \nKetik nama makanan yang ingin kamu masak, Aku akan memberikan resep nya \nIngin melanjutkan? jika tidal, ketik 'tidak'"],
            "context": [""]
        },
        {
            "tag": "bahanJ",
            "inputs": ["j"],
            "responses": ["Dari jagung Kamu bisa buat: \nbinte biluhuta, bubur manado \nKetik nama makanan yang ingin kamu masak, Aku akan memberikan resep nya \nIngin melanjutkan? jika tidal, ketik 'tidak'"],
            "context": [""]
        },
        {
            "tag": "bahanK",
            "inputs": ["k"],
            "responses": ["Dari jantung pisang Kamu bisa buat: \nsup ikan jantung pisang, cetemak jagung \nKetik nama makanan yang ingin kamu masak, Aku akan memberikan resep nya \nIngin melanjutkan? jika tidal, ketik 'tidak'"],
            "context": [""]
        },
        {
            "tag": "bahanL",
            "inputs": ["l"],
            "responses": ["Dari tahu Kamu bisa buat: \ntahu petis, tahu tek \nKetik nama makanan yang ingin kamu masak, Aku akan memberikan resep nya \nIngin melanjutkan? jika tidal, ketik 'tidak'"],
            "context": [""]
        },
        {
            "tag": "bahanM",
            "inputs": ["m"],
            "responses": ["Dari iga sapi Kamu bisa buat: \nsup konro, iga penyet \nKetik nama makanan yang ingin kamu masak, Aku akan memberikan resep nya \nIngin melanjutkan? jika tidal, ketik 'tidak'"],
            "context": [""]
        },
        {
            "tag": "bahanN",
            "inputs": ["n"],
            "responses": ["Dari iga kambing Kamu bisa buat: \ntengkleng \nKetik nama makanan yang ingin kamu masak, Aku akan memberikan resep nya \nIngin melanjutkan? jika tidal, ketik 'tidak'"],
            "context": [""]
        },
        {
            "tag": "bahanO",
            "inputs": ["o"],
            "responses": ["Dari kaki sapi Kamu bisa buat: \nmie kocok \nKetik nama makanan yang ingin kamu masak, Aku akan memberikan resep nya \nIngin melanjutkan? jika tidal, ketik 'tidak'"],
            "context": [""]
        },
        {
            "tag": "bahanP",
            "inputs": ["p"],
            "responses": ["Dari nagka muda Kamu bisa buat: \ngudeg \nKetik nama makanan yang ingin kamu masak, Aku akan memberikan resep nya \nIngin melanjutkan? jika tidal, ketik 'tidak'"],
            "context": [""]
        },
        {
            "tag": "rendang",
            "inputs": ["rendang"],
            "responses": ["\nBerikut Resepnya: \n1. daging sapi \n2. kelapa \n3. daun jeruk \n4. serai \n5. asam kandis \n6. minyak goreng \n7. garam \n8. bawang merah \n9. bawang putih \n10. cabai merah \n11. lengkuas \n12. kemiri \n13. cengkeh \nKamu bisa menonton video tutorial membuat rendang disini https://youtu.be/VX0ox3uQHQc, \nKamu juga bisa mengunjungi toko online yang menjual rendang, jika anda tertarik ketik 'beli rendang', jika tidak ketik 'tidak'"],
            "context": [""]
        },
        {
            "tag": "beli1",
            "inputs": ["beli rendang"],
            "responses": ["Beli disini https://tokopedia.link/kVumEFbO7pb"],
            "context": [""]
        },
        {
            "tag": "rawon",
            "inputs": ["rawon"],
            "responses": ["\nBerikut Resepnya: \n1. daging sapi \n2. daun jeruk purut \n3. daun salam \n4. daun bawang \n5. serai \n6. lengkuas \n7. merica bubuk \n8. air bersih \n9. gula jawa \n10. garam \n11. bawang merah \n12. bawang putih \n13. kemiri \n14. kluwak \n15. jahe \n16. kencur \n17. ketumbar bubuk \n18. asam jawa \n19. jinten \n20. terasi \n21. kerupuk udang \n22. telur asin \n23. sambal terasi \nKamu bisa menonton video tutorial membuat rawon disini https://youtu.be/YDz_ZsJaFZw, \nKamu juga bisa mengunjungi toko online yang menjual rawon, jika anda tertarik, ketik 'beli rawon', jika tidak ketik 'tidak'"],
            "context": [""]
        },
        {
            "tag": "beli2",
            "inputs": ["beli rawon"],
            "responses": ["Beli disini https://shopee.co.id/Rawon-Sapi-i.310029180.4152934676?gclid=EAIaIQobChMIr_fVw8zt9wIVkx0rCh2hIwbvEAQYASABEgLIv_D_BwE "],
            "context": [""]
        },
        {
            "tag": "sate ayam",
            "inputs": ["sate ayam"],
            "responses": ["\nBerikut resepnya: \n1. daging ayam \n2. jeruk nipis \n3. bawang putih \n4. lada bubuk \n5.garam \n6. tusuk sate \n7. kacang tanah \n8. daun jeruk purut \n9. kecap manis \n10. gula pasir \n11. gula merah \n12. air \n13. minyak \n14. cabai rawit \n15. cabai keriting \n16. bawang merah \n17. bawang putih \n18. kemiri \nKamu bisa menonton video tutorial membuat sate ayam disini https://youtu.be/Vh__EYZzPwg, \nKamu juga bisa mengunjungi toko online yang menjual sate ayam, jika anda tertarik ketik 'beli sate ayam', jika tidak ketik 'tidak'"],
            "context": [""]
        },
        {
            "tag": "beli3",
            "inputs": ["beli sate ayam"],
            "responses": ["Beli disini https://www.tokopedia.com/trengtengoto/sate-ayam-bumbu-manis-matang-halal-only-grab-gojek-chicken-satay "],
            "context": [""]
        },
        {
            "tag": "kerak telor",
            "inputs": ["kerak telor"],
            "responses": ["\n1. beras ketan \n2. telur bebek \n3. udang teri \n4. kelapa parut \n5. bawang goreng \n6. cabai merah \n7. garam \nKamu bisa menonton video tutorial membuat kerak telor disini https://youtu.be/P5Y5y-YH1Mg, \nKamu juga bisa mengunjungi toko online yang menjual kerak telor, jika anda tertarik ketik 'beli kerak telor ', jika tidak ketik 'tidak'"],
            "context": [""]
        },
        {
            "tag": "beli4",
            "inputs": ["beli kerak telor"],
            "responses": ["Beli disini https://www.tokopedia.com/keraktelorsapei/kerak-telor-bebek-bang-sapei?extParam=ivf%3Dfalse"],
            "context": [""]
        },
        {
            "tag": "karedok",
            "inputs": ["karedok"],
            "responses": ["\n1. timun \n2. terong hijau \n3. kacang panjang \n4. daun kol \n5. toge \n6. daun kemangi \n7. asam jawa \n8. air matang \n9. kacang tanah \n10. cabai merah keriting \n11. cabai rawit merah \n12. bawang putih \n13. kencur \n14. gula merah \n15. garam \n16. kerupuk kanji \n17. emping \nKamu bisa menonton video tutorial membuat karedok disini https://youtu.be/hFOBfFn2Y3w, \nKamu juga bisa mengunjungi toko online yang menjual karedok, jika anda tertarik ketik 'beli karedok ', jika tidak ketik 'tidak'"],
            "context": [""]
        },
        {
            "tag": "beli5",
            "inputs": ["beli karedok"],
            "responses": ["Beli disini https://www.tokopedia.com/tukangsayur/karedok-leunca?extParam=ivf%3Dfalse"],
            "context": [""]
        },
        {
            "tag": "ayam taliwang",
            "inputs": ["ayam taliwang"],
            "responses": ["\n1. ayam kampung \n2. air jeruk limao \n3. garam \n4. santan \n.5 gula merah \n6. minyak \n7. bawang merah \n8. bawang putih \n9. cabai merah besar \n10. cabai merah keriting \n11. kemiri \n12. terasi \nKamu bisa menonton video tutorial membuat ayam taliwang disini https://youtu.be/Iw_KY_HiQWo, \nKamu juga bisa mengunjungi toko online yang menjual ayam taliwang, jika anda tertarik ketik 'beli ayam taliwang ', jika tidak ketik 'tidak'"],
            "context": [""]
        },
        {
            "tag": "beli6",
            "inputs": ["beli ayam taliwang"],
            "responses": ["Beli disini https://www.tokopedia.com/taliwangbali/ayam-bakar-taliwang-per-1-ekor-frozen-pack?extParam=ivf%3Dfalse"],
            "context": [""]
        },
        {
            "tag": "ayam betutu",
            "inputs": ["ayam betutu"],
            "responses": ["\n1. ayam \n2. serai \n3. daun salam \n4. air \n5. bawang putih \n6. bawang merah \n7. cabai merah besar \n8. cabai merah keriting \n9. kemiri \n10. jahe \n11. kunyit \n12. lengkuas \n13. kencur \n14. merica utuh \n15. ketumbar \n16. garam \n17. gula merah \n18. terasi \n19. sayuran rebus \n20. kacang tanah \n21. sambal matah \nKamu bisa menonton video tutorial masak ayam betutu disini https://youtu.be/MzTYB-8bW10, \nKamu juga bisa mengunjungi toko online yang menjual ayam betutu, jika anda tertarik ketik 'beli ayam betutu', jika tidak ketik 'tidak'"],
            "context": [""]
        },
        {
            "tag": "beli7",
            "inputs": ["beli ayam betutu"],
            "responses": ["Beli disini https://www.tokopedia.com/taliwangbali/ayam-betutu-2-paha-2-dada-frozen-pack?src=topads"],
            "context": [""]
        },
        {
            "tag": "pempek",
            "inputs": ["pempek"],
            "responses": ["\n1. ikan tengiri \n2. tepung tapioka \n3. tepung terigu \n4. air es \n5. bawang putih \n6. telur \n7. kuning telur \n8. gula merah \n9. garam \n10. air \n11. asam jawa \n12. gula pasir \n13. bawang putih \n14. cabe rawit \n15. ebi \nKamu bisa menonton video tutorial membuat pempek disini https://youtu.be/VeepZhxG4Hk, \nKamu juga bisa mengunjungi toko online yang menjual pempek, jika anda tertarik ketik 'beli pempek', jika tidak ketik 'tidak'"],
            "context": [""]
        },
        {
            "tag": "beli8",
            "inputs": ["beli pempek"],
            "responses": ["Beli disini https://www.tokopedia.com/serbaguna88/pempek-ikan-tenggiri-palembang-isi-30-pcs?src=topads"],
            "context": [""]
        },
        {
            "tag": "nasi goreng",
            "inputs": ["nasi goreng jawa"],
            "responses": ["\n1. nasi putih \n2. bawang putih \n3. bawang merah \n4. kemiri \n5. terasi bakar \n6. cabe merah keriting \n7. tomat kecil \n8. telur ayam \n9. daun bawang \n10. sayuran \n11. gula pasir \n12. lada \n13. garam \n14. kecap asin \n15. kecap manis \nKamu bisa menonton video tutorial membuat nasi goreng disini https://youtu.be/zPWE_aINqTU, \nKamu juga bisa mengunjungi toko online yang menjual nasi goreng, jika anda tertarik ketik 'beli nasi goreng', jika tidak ketik 'tidak'"],
            "context": [""]
        },
        {
            "tag": "beli9",
            "inputs": ["beli nasi goreng"],
            "responses": ["Beli disini https://www.tokopedia.com/bakmigm/bakmi-gm-nasi-goreng-matang?src=topads"],
            "context": [""]
        },
        {
            "tag": "mie aceh",
            "inputs": ["mie aceh"],
            "responses": ["\n1. mie kuning basag \n2. daging sapi tenderloin \n3. bawang putih \n4. bawang merah \n5. tomat \n6. air \n7. ryco kaldu sapi \n8. toge \n9. kecap manis \n10. garam \n11. gula pasir \n12. cuka \n13. minyak \n14. daun bawang \n15. bawang goreng \n16. kapulaga \n17. cabai merah besar \n18. kunyit \n19. jinten \n20. lada bubuk \nKamu bisa menonton video tutorial membuat mie aceh disini https://youtu.be/OGtn3u23Yjw, \nKamu juga bisa mengunjungi toko online yang menjual mie aceh, jika anda tertarik ketik 'beli mie aceh', jika tidak ketik 'tidak'"],
            "context": [""]
        },
        {
            "tag": "beli10",
            "inputs": ["beli mie aceh"],
            "responses": ["Beli disini https://www.tokopedia.com/jumbomieaceh/paket-promo-mie-aceh-mentah-basah-kuning-lidi-bumbu-nasi-dan-mi-goreng"],
            "context": [""]
        },
        {
            "tag": "mie kocok",
            "inputs": ["mie kocok"],
            "responses": ["\n1. mie basah \n2. toge \n3. sledri \n4. kaki sapi \n5. air \n6. daun salam \n7. serai \n.8 jahe \n9. bawang putih \n10. bawang merah \n11. penyedap rasa \nKamu bisa menonton video tutorial membuat mie kocok disini https://youtu.be/J1avnD_qH6I, \nKamu juga bisa mengunjungi toko online yang menjual mie kocok, jika anda tertarik ketik 'beli mie kocok', jika tidak ketik 'tidak'"],
            "context": [""]
        },
        {
            "tag": "beli11",
            "inputs": ["beli mie kocok"],
            "responses": ["Beli disini https://www.tokopedia.com/kyfood/mie-kocok-k-y-l-kylafood?extParam=ivf%3Dfalse%26src%3Dsearch"],
            "context": [""]
        },
        {
            "tag": "soto banjar",
            "inputs": ["soto banjar"],
            "responses": ["\n1. ayam kampung \n2. pekak \n3. kapulaga \n4. kayu manis \n5. biji palah \n6. susu bubuk \n7. kentang \n8. gula pasir \n9. bawang putih \n10. bawang merah \n11. kemiri \n12. merica butir \n13. kunyit \n14. jahe \n15. adas manis \n16. garam \n17. telur bebek \n18. mie suun \n19. ketupat \n20. daun bawang \n21. bawang goreng \n22. perkedel \n23. jeruk nipis \n24. sambal rawit \nKamu bisa menonton video tutorial membuat soto banjar disini https://youtu.be/L22rPa51444, \nKamu juga bisa mengunjungi toko online yang menjual soto banjar, jika anda tertarik ketik 'beli soto banjar', jika tidak ketik 'tidak'"],
            "context": [""]
        },
        {
            "tag": "beli12",
            "inputs": ["beli soto banjar"],
            "responses": ["Beli disini https://www.tokopedia.com/sotobanjarselerakita/soto-ayam-banjar-saja-tanpa-nasi-ketupat?extParam=ivf%3Dfalse"],
            "context": [""]
        },
        {
            "tag": "bakso",
            "inputs": ["bakso"],
            "responses": ["\n1. daging sapi \n2. telur \n3. bawang putih \n4. bawang goreng \n5. es batu \n6. tepung tapioka \n7. gula \n8. kaldu sapi bubuk \n9. merica \n10. baking powder \nKamu bisa menonton video tutorial membuat bakso disini https://youtu.be/BJpGEtyVCII, \nKamu juga bisa mengunjungi toko online yang menjual bakso, jika anda tertarik ketik 'beli bakso', jika tidak ketik 'tidak'"],
            "context": [""]
        },
        {
            "tag": "beli13",
            "inputs": ["beli bakso"],
            "responses": ["Beli disini https://shopee.co.id/Baso-Goank-Baso-Sapi-Kuah-kedai-MIE-TIME-i.24269640.1918263853"],
            "context": [""]
        },
        {
            "tag": "gudeg",
            "inputs": ["gudeg"],
            "responses": ["\n1. nangka muda \n2. telur ayam \n3. daun salam \n4. daun jeruk \n5. lengkuas \n6. gula jawa \n7. santen sedang \n8. santen kental \n9. bawang merah \n10. bawang putih \n11. kemiri \n12. ketumbar \n13. terasi \n14. jinten \n15. garam \nKamu bisa menonton video tutorial membuat gudeg disini https://youtu.be/KFdZWT7wHL0, \nKamu juga bisa mengunjungi toko online yang menjual gudeg, jika anda tertarik ketik 'beli gudeg', jika tidak ketik 'tidak'"],
            "context": [""]
        },
        {
            "tag": "beli14",
            "inputs": ["beli gudeg"],
            "responses": ["Beli disini https://www.tokopedia.com/inphinity/gudeg-bagong-kaleng-resep-yu-djum-asli-jogja-telurtahu?src=topads"],
            "context": [""]
        },
        {
            "tag": "soto betawi",
            "inputs": ["soto betawi"],
            "responses": ["\n1. daging sapi \n2. kayu manis \n3. cegkeh \n4. kapulaga \n5. lengkuas \n6. daun jeruk \n7. daun salam \n8. paru sapi \n9. babat rebus \n10. gajih rebut \n11. susu cair \n12. merica bubuk \n13. kaldu jamur \n14. gula pasir \n15. garam \n16. bawang merah \n17. bawang putih \n18. ketumbar \n19. jahe \n20. kentang \n21. tomat merah \n22. daun bawang \n23. bawang goreng \n24. jeruk nipis \n25. emping goreng \nKamu bisa menonton video tutorial membuat soto betawi disini https://youtu.be/KZs7d-t5pok, \nKamu juga bisa mengunjungi toko online yang menjual soto betawi, jika anda tertarik ketik 'beli soto betawi', jika tidak ketik 'tidak'"],
            "context": [""]
        },
        {
            "tag": "beli15",
            "inputs": ["beli soto betawi"],
            "responses": ["Beli disini https://www.tokopedia.com/warungmponur/soto-betawi-santan-asli"],
            "context": [""]
        },
        {
            "tag": "sup konro",
            "inputs": ["sup konro"],
            "responses": ["\n1. iga sapi \n2. daun salam \n3. daun jeruk purut \n.4 serai \n5. kluwak \n6. garam \n7. asam jawa \n8. kemiri \n9. bawang putih \n10. bawang merah \n11. lengkuas \nKamu bisa menonton video tutorial membuat sup konro disini https://youtu.be/sYI0XOgoXR4, \nKamu juga bisa mengunjungi toko online yang menjual sup konro, jika anda tertarik ketik 'beli sup konro', jika tidak ketik 'tidak'"],
            "context": [""]
        },
        {
            "tag": "beli16",
            "inputs": ["beli sup konro"],
            "responses": ["Beli disini https://shopee.co.id/Bumbu-Sop-Konro-Alminana-i.2086295.10807206?gclid=EAIaIQobChMIgK2citrt9wIVf5JmAh2wCQw3EAQYBSABEgLrOPD_BwE"],
            "context": [""]
        },
        {
            "tag": "coto makasar",
            "inputs": ["coto makasar"],
            "responses": ["\n1. daging sapi \n2. paruh sapi \n3. kaldu sapi \n4. air cucian beras \n5. lengkuas \n6. jahe \n7. serai \n8. daun jeruk \n9. daun salam \n10. kacang tanah \n11. bawang putih \n12. kemiri \n13. merican butiran \n14. garam \n15. bawang goreng \n16. buras \n17. sambal rawit merah \n18. jeruk nipis \nKamu bisa menonton video tutorial membuat coto makasar disini https://youtu.be/NPOp2nuJu8Y, \nKamu juga bisa mengunjungi toko online yang  coto makasar,jika anda tertarik ketik 'beli coto makasar', jika tidak ketik 'tidak'"],
            "context": [""]
        },
        {
            "tag": "beli17",
            "inputs": ["beli coto makasar"],
            "responses": ["Beli disini https://www.tokopedia.com/rumahbumburatna/bumbu-coto-makassar?extParam=ivf%3Dfalse"],
            "context": [""]
        },
        {
            "tag": "iga penyet",
            "inputs": ["iga penyet"],
            "responses": ["\n1. iga sapi \n2. daun salam \n3. lengkuas \n4. serai \n5. gula jawa \n6. bawang merah \n7. bawang putih \n8. merica butiran \n9. ketumbar \n10. kemiri \n11. jahe \n12. kunyit \n13. garam \n14. cabai rawit merah \n15. cabai merah keriting \n16. tomat merah \n17. gula pasir \n18. garam \n19. jeruk nipis \n20. lalapan sayur \nKamu bisa menonton video tutorial membuat iga penyet disini https://youtu.be/elbx_cHZ4zc, \nKamu juga bisa mengunjungi toko online yang menjual iga penyet, jika anda tertarik ketik 'beli iga penyet', jika tidak ketik 'tidak'"],
            "context": [""]
        },
        {
            "tag": "beli18",
            "inputs": ["beli iga penyet"],
            "responses": ["Beli disini https://shopee.co.id/Iga-Penyet-Frozen-400gram-2-3-Porsi-i.4555690.4144465724"],
            "context": [""]
        },
        {
            "tag": "sate bandeng",
            "inputs": ["sate bandeng"],
            "responses": ["\n1. kelapa parut \n2. ikan bandeng \n3. garam \n4. asam jawa \n5. telur \n6. air \n7. santen \n8. minyak \n9. daun pisang \n10. kunyit \n11. bawang merah \n12. bawang putih \n13. caabai merah besar \n14. ketumbar \n15. jinten \n16. lengkuas \nKamu bisa menonton video tutorial membuat sate bandeng disini https://youtu.be/onSbbp1ZEQY, \nKamu juga bisa mengunjungi toko online yang menjual sate bandeng, jika anda tertarik ketik 'beli sate bandeng', jika tidak ketik 'tidak'"],
            "context": [""]
        },
        {
            "tag": "beli19",
            "inputs": ["beli sate bandeng"],
            "responses": ["Beli disini https://www.tokopedia.com/archive-printingadv/sate-bandeng-murah-khas-indonesia-gurih?src=topads"],
            "context": [""]
        },
        {
            "tag": "tengkleng",
            "inputs": ["tengkleng"],
            "responses": ["\n1. daging kambing \n2. tulang iga kambing \n3. air \n4. minyak \n5. daun salam \n6. daun jeruk \n7. lengkuas \n8. kayu manis \n9. cengkeh \n10. cabai rawit merah \n11. kemiri \n12. ketumbar \n13. jinten \n14. bawang putih \n15. bawang merah \n16. jahe \n17. garam \n18. gula pasir \nKamu bisa menonton video tutorial membuat tengkleng disini https://youtu.be/TpMHAUpFMkk, \nKamu juga bisa mengunjungi toko online yang menjual tengkleng, jika anda tertarik ketik 'beli tengkleng', jika tidak ketik 'tidak'"],
            "context": [""]
        },
        {
            "tag": "beli20",
            "inputs": ["beli tengkleng"],
            "responses": ["Beli disini https://www.tokopedia.com/dapuremakc/tengkleng-rica-2-kg-kepala-dan-kaki-kambing?extParam=ivf%3Dfalse"],
            "context": [""]
        },
        {
            "tag": "pendap",
            "inputs": ["pendap"],
            "responses": ["\n1. daging sapi \n2. paruh sapi \n3. babat \n4. bawang merah \n5. bawang putih \n6. kunyit \n7. kemiri \n8. santan \n9. daun salam \n10. serai \n11. lengkuas \n12. daun jeruk \n13. garam \n14. merica \n15. gula pasir \nKamu bisa menonton video tutorial membuat pendap disini https://youtu.be/h4MEtuc1l4A, \nKamu juga bisa mengunjungi toko online yang menjual pendap, jika anda tertarik ketik 'beli pendap', jika tidak ketik 'tidak'"],
            "context": [""]
        },
        {
            "tag": "beli21",
            "inputs": ["beli pendap"],
            "responses": ["Beli disini https://shopee.co.id/PENDAP-BENGKULU-MAKANAN-KHAS-BENGKULU-i.42060160.7581378741"],
            "context": [""]
        },
        {
            "tag": "empal gentong",
            "inputs": ["empal gentong"],
            "responses": ["\n1. biji terong \n2. ikan patin \n3. kacang panjang \n4. bawang merah \n5. bawang putih \n6. lengkuas \n7. kemiri \n8. jahe \n9. garam \n10. air matang \nKamu bisa menonton video tutorial membuat empal gentong disini https://youtu.be/Z1vvk0e69GM, \nKamu juga bisa mengunjungi toko online yang menjual empal gentong, jika anda tertarik ketik 'beli empal gentong', jika tidak ketik 'tidak'"],
            "context": [""]
        },
        {
            "tag": "beli22",
            "inputs": ["beli empal gentong"],
            "responses": ["Beli disini https://shopee.co.id/Empal-Gentong-Pedas-H--Apud-khas-cirebon-i.24768610.3144440924?gclid=EAIaIQobChMI6eXKp97t9wIVNJJmAh0U5QRXEAQYASABEgIdMfD_BwE"],
            "context": [""]
        },
        {
            "tag": "juhu singkah",
            "inputs": ["juhu singkah"],
            "responses": ["\n1. biji terong \n2. ikan patin \n3. kacang panjang \n4. bawang merah \n5. bawang putih \n6. lengkuas \n7. kemiri \n8. jahe \n9. garam \n10. air matang \nKamu bisa menonton video tutorial membuat juhu singkah disini https://youtu.be/hNd8NepKusE, \nKamu juga bisa mengunjungi toko online yang menjual juhu singkah, jika anda tertarik ketik 'beli juhu singkah', jika tidak ketik 'tidak'"],
            "context": [""]
        },
        {
            "tag": "beli23",
            "inputs": ["beli juhu singkah"],
            "responses": ["Beli disini https://food.grab.com/id/id/restaurant/papui-yu-menteng-delivery/6-CY4EA8KCCBVYRJ"],
            "context": [""]
        },
        {
            "tag": "rica rica ayam",
            "inputs": ["rica rica ayam"],
            "responses": ["\n1. ayam kampung \n2. minyak \n3. jeruk nipis \n4. daun jeruk \n5. daun salam \n6. serai \n7. daun pandan \n8. daun bawang \n9. kemiri \n9. jahe \n10. lengkuas \n11. cabai rawit merah \n12. cabai merah keriting \n13. bawang merah \n14. bawang putih \n15. gula pasir \n16. garam \nKamu bisa menonton video tutorial membuat rica rica ayam disini https://youtu.be/fDu_gLesbI0, \nKamu juga bisa mengunjungi toko online yang menjual rica rica ayam, jika anda tertarik ketik 'beli rica rica ayam', jika tidak ketik 'tidak'"],
            "context": [""]
        },
        {
            "tag": "beli24",
            "inputs": ["beli rica rica ayam"],
            "responses": ["Beli disini https://shopee.co.id/Ayam-rica-rica-pedas-i.83560283.2872780367"],
            "context": [""]
        },
        {
            "tag": "sup ikan jantung pisang",
            "inputs": ["sup ikan jantung pisang"],
            "responses": ["\n1. jantung pisang \n2. air matang \n3. santan \n4. ikan kakap \n5. daun kemangi \n6. bawang putih \n7. jeruk nipis \n8. kunyit \n9. tomat \n10. garam \n11. serai \n12. minyak \n13. cabai merah keriting \n14. cabai rawit merah \n15. bawang merah \n16. lengkuas \n17. daun salam \nKamu bisa menonton video tutorial membuat sup ikan jantung disini https://youtu.be/YUGFCKPGeNs, \nKamu juga bisa mengunjungi toko online yang menjual sup ikan jantung, jika anda tertarik ketik 'beli sup ikan jantung pisang', jika tidak ketik 'tidak'"],
            "context": [""]
        },
        {
            "tag": "beli25",
            "inputs": ["beli sup ikan jantung pisang"],
            "responses": ["Beli disini https://www.tokopedia.com/rekomendasi/1249360936?ref=googleshopping&c=16956930613&m=379186029&p=1249360936"],
            "context": [""]
        },
        {
            "tag": "tahu tek",
            "inputs": ["tahu tek"],
            "responses": ["\n1. lontong \n2. kentang \n3. telur ayam \n4. garam \n5. merica butir \n6. minyak \n7. toge \n8. daun bawang \n9. daun seledri \n10. bawang goreng \n11. kacang tanah \n12. bawang putih \n13. bawang merah \n14. cabai rawit merah \n15. garam \n16. kecap manis \n17. air matang \nKamu bisa menonton video tutorial membuat tahu tek disini https://youtu.be/6cevd31l3gU, \nKamu juga bisa mengunjungi toko online yang menjual tahu tek, jika anda tertarik ketik 'beli tahu tek', jika tidak ketik 'tidak'"],
            "context": [""]
        },
        {
            "tag": "beli26",
            "inputs": ["beli tahu tek"],
            "responses": ["Beli disini https://shopee.co.id/Bumbu-tahu-telor-(tahu-tek)-sangrai-200gr-alami-tanp-pengawet-tanpa-msg-tanpa-minyak-i.21064999.5403176145"],
            "context": [""]
        },
        {
            "tag": "ayam cicane",
            "inputs": ["ayam cicane"],
            "responses": ["\n1. ayam kampung \n2. daun salam \n3. serai \n4. jahe \n5. lengkuas \n6. gula merah \n7. garam \n8. santan \n9. minyak \n10. bawang merah \n11. bawang putih \n12. cabai rawit merah \n13. terasi \n14. garam \nKamu bisa menonton video tutorial membuat ayam cicane disini https://youtu.be/f8aTv_55Wgg, \nKamu juga bisa mengunjungi toko online yang menjual ayam cicane, jika anda tertarik ketik 'beli ayam cicane', jika tidak ketik 'tidak'"],
            "context": [""]
        },
        {
            "tag": "beli27",
            "inputs": ["beli ayam cicane"],
            "responses": ["Beli disini https://shopee.co.id/Paket-Ayam-Bakar-Taliwang-Madu-Ingkung-1-Ekor-1000gr-%2B-Sambal-Pedas-Mantap-i.17942431.7044922242?gclid=EAIaIQobChMI97uq_ubt9wIV_ZlmAh1Rbw7qEAQYASABEgJVNvD_BwE"],
            "context": [""]
        },
        {
            "tag": "mie celor",
            "inputs": ["mie celor"],
            "responses": ["\n1. udang \n2. santan \n3. kecap asin \n4. tepung terigu \n5. gula pasir \n6. kaldu udang \n7. ebi \n8. bawang merah \n9. bawang putih \n10. merica butir \n11. garam \n12. mie kuning \n13. toge \n14. telur \n15. bawang goreng \n16. daun seledri \n17. daun bawang \n18. jeruk limao \nKamu bisa menonton video tutorial membuat mie celor disini https://youtu.be/RUS99V7fznU, \nKamu juga bisa mengunjungi toko online yang menjual mie celor, jika anda tertarik ketik 'beli mie celor', jika tidak ketik 'tidak'"],
            "context": [""]
        },
        {
            "tag": "beli28",
            "inputs": ["beli mie celor"],
            "responses": ["Beli disini https://www.tokopedia.com/keluargajaya/mie-celor?extParam=ivf%3Dfalse%26src%3Dsearch&refined=true"],
            "context": [""]
        },
        {
            "tag": "masak habang",
            "inputs": ["masak habang"],
            "responses": ["\n1. daging ayam \n2. asam jawa \n3. garam \n4. bawang goreng \n5. cabai merah besar \n6. bawang merah \n7. bawang putih \n8. jahe \n9. kayu manis \n10. gula merah \n11. cengkeh \n12. gula pasir \nKamu bisa menonton video tutorial membuat masak habang disini https://youtu.be/m45KL9Zyiuo, \nKamu juga bisa mengunjungi toko online yang menjual masak habang, jika anda tertarik ketik 'beli masak habang', jika tidak ketik 'tidak'"],
            "context": [""]
        },
        {
            "tag": "beli29",
            "inputs": ["beli masak habang"],
            "responses": ["Beli disini https://shopee.co.id/Daging-Masak-Habang-khas-banjar-i.20544865.8460174588"],
            "context": [""]
        },
        {
            "tag": "cetemak jantung",
            "inputs": ["cetemak jagung"],
            "responses": ["\n1. jagung \n2. kacang hijau \n3. kacang tanah \n4. bunga pepaya \n5. jantung pisang \n6. pucuk labu \n7. daun ubi \n8. garam \nKamu bisa menonton video tutorial membuat cetemak jagung disini https://youtu.be/PDN7FJO_B30, \nKamu juga bisa mengunjungi toko online yang menjual cetemak jagung, jika anda tertarik ketik 'beli cetemak jagung', jika tidak ketik 'tidak'"],
            "context": [""]
        },
        {
            "tag": "beli30",
            "inputs": ["beli cetemak jagung"],
            "responses": ["Maaf, belum ada toko yang menjual makanan ini"],
            "context": [""]
        },
        {
            "tag": "tahu petis",
            "inputs": ["tahu petis"],
            "responses": ["\n1. tahu \n2. cabai rawit merah \n3. bawang putih \n4. garam \n5. air matang \n6. tepung maizena \nKamu bisa menonton video tutorial membuat tahu petis disini https://youtu.be/NQPPfZljTY8, \nKamu juga bisa mengunjungi toko online yang menjual tahu petis, jika anda tertarik ketik 'beli tahu petis', jika tidak ketik 'tidak'"],
            "context": [""]
        },
        {
            "tag": "beli31",
            "inputs": ["beli tahu petis"],
            "responses": ["Beli disini https://shopee.co.id/Tahu-Petis-Yudhistira-i.86386748.5678195912?sp_atk=11b5e8ea-03cd-4f49-b553-d6334c6dc02c&xptdk"],
            "context": [""]
        },
        {
            "tag": "binte biluhuta",
            "inputs": ["binte biluhuta"],
            "responses": ["\n1. air mentah \n2. jagung manis \n3. ikan cakalang \n4. udang \n5. jahe \n6. kelapa \n7. kaldu ayam \n8. daun kemangi \n9. bawang merah \n10. bawang putih \n12. cabai rawit merah \n13. garam \n14. kecap manis \n15. jeruk nipis \nKamu bisa menonton video tutorial membuat binte biluhuta disini https://youtu.be/s0xOIknuMdg, \nKamu juga bisa mengunjungi toko online yang menjual binte biluhuta, jika anda tertarik ketik 'beli binte biluhuta', jika tidak ketik 'tidak'"],
            "context": [""]
        },
        {
            "tag": "beli32",
            "inputs": ["beli biluhuta"],
            "responses": ["Beli disini https://shopee.co.id/Binte-Biluhuta-Jagung-Siram-i.91738492.1757426975?sp_atk=71706f6c-a75b-4d7f-a715-ff266f82d4cb&xptdk=71706f6c-a75b-4d7f-a715-ff266f82d4cb"],
            "context": [""]
        },
        {
            "tag": "gulai ikan patin",
            "inputs": ["gulai ikan patin"],
            "responses": ["\n1. ikan patin \n2. santan \n3. cabai rawit merah \n4. bawang putih \n5. bawang merah \n6. cabai merah keriting \n7. jahe \n8. kunyit \n9. serai \n10. kayu manis \n11. daun jeruk \n12. daun kunyit \n13. asam kandis \n14. jeruk nipis \n15. jintan \n16. pala \n17. ketumbar \n18. cengkeh \n19. kayu manis \n20. garam \nKamu bisa menonton video tutorial membuat gulai ikan patin disini https://youtu.be/838rdDFhWJw, \nKamu juga bisa mengunjungi toko online yang menjual gulai ikan patin, jika anda tertarik ketik 'beli gulai ikan patin', jika tidak ketik 'tidak'"],
            "context": [""]
        },
        {
            "tag": "beli33",
            "inputs": ["beli gulai ikan patin"],
            "responses": ["Beli disini https://shopee.co.id/paket-gulai-ikan-patin-siap-masak-komplit-termurah-500-gram-i.478692804.8488365159"],
            "context": [""]
        },
        {
            "tag": "seblak",
            "inputs": ["seblak"],
            "responses": ["\n1. kerupuk kanji \n2. makaroni \n3. telur ayam \n4. sawi hijau \n5. daun bawang \n6. bakso \n7. sosis \n8. kecap manis \n9. garam \n10. gula pasir \n11. lada bubuk \n12. kaldu ayam \n13. minyak \n14. bawang merah \n15. bawang putih \n16. kencur \n17. cabai merah keriting \n18. cabai rawit merah \nKamu bisa menonton video tutorial membuat seblak disini https://youtu.be/yyE6Vw3ZAj4, \nKamu juga bisa mengunjungi toko online yang menjual seblak, jika anda tertarik ketik 'beli seblak', jika tidak ketik 'tidak'"],
            "context": [""]
        },
        {
            "tag": "beli34",
            "inputs": ["beli seblak"],
            "responses": ["Beli disini https://shopee.co.id/SEBLAK-ACI-ABAH-TEA-TERLEZAT-SEBLAK-INSTANT-ABAH-TEA-SEBLAK-INSTAN-KUAH-BOCI-BASO-ACI-TULANG-RANGU-i.128148640.3380372964?sp_atk=64b9507f-5244-40d8-b309-35d58ed62188&xptdk=64b9507f-5244-40d8-b309-35d58ed62188"],
            "context": [""]
        },
        {
            "tag": "seruit",
            "inputs": ["seruit"],
            "responses": ["\n1. ikan patin \n2. garam \n3. jeruk nipis \n4. kunyit \n5. bawang putih \n6. mangga muda \n7. tempoyak \n8. cabai merah keriting \n9. cabai rawit merah \n10. tomat \n11. bawang merah \n12. terasi \n13. gula \nKamu bisa menonton video tutorial membuat seruit disini https://youtu.be/oCsr8z-oc5Q, \nKamu juga bisa mengunjungi toko online yang menjual seruit, jika anda tertarik ketik 'beli seruit', jika tidak ketik 'tidak'"],
            "context": [""]
        },
        {
            "tag": "beli35",
            "inputs": ["beli seruit"],
            "responses": ["Beli disini https://shopee.co.id/Seruit-IKAN-MERAH-PEDES-SEGERRRRR-i.216656170.5658273573"],
            "context": [""]
        },
        {
            "tag": "siomay",
            "inputs": ["siomay"],
            "responses": ["\n1. daging ayam \n2. udang \n3. ikan tenggiri \n4. telur ayam \n5. tepung kanji \n6. kulit pangsit \n7. bawang putih \n8. bawang merah \n9. kaldu ayam \n10. merica bubuk \n11. gula pasir \n12. kacang tanah \n13. cabai merah besar \n14. bawang merah \n15. garam \n16. kecap manis \n17. air matang \n18. jeruk limau \nKamu bisa menonton video tutorial membuat siomay disini https://youtu.be/hW6CNrPvSHk, \nKamu juga bisa mengunjungi toko online yang menjual siomay, jika anda tertarik ketik 'beli siomay', jika tidak ketik 'tidak'"],
            "context": [""]
        },
        {
            "tag": "beli36",
            "inputs": ["beli siomay"],
            "responses": ["Beli disini https://www.tokopedia.com/ngemil-cemil-yuks/siomay-ikan-isi-20-pcs?src=topads"],
            "context": [""]
        },
        {
            "tag": "bubur manado",
            "inputs": ["bubur manado"],
            "responses": ["\n1. beras \n2. labu kuning \n3. singkong \n4. jagung manis \n5. daun bayam \n6. daun kangkung \n7. daun kemangi \n8. bawang putih goreng \n9. jahe \n10. serai \n11. lada bubuk \n12. gula pasir \n13. garam \n14. air mentah \n15. ikan asin \nKamu bisa menonton video tutorial membuat bubur manado disini https://www.youtube.com/watch?v=jLIz-oO4Jxo, \nKamu juga bisa mengunjungi toko online yang menjual bubur manado, jika anda tertarik ketik 'beli bubur manado', jika tidak ketik 'tidak'"],
            "context": [""]
        },
        {
            "tag": "beli37",
            "inputs": ["beli bubur manado"],
            "responses": ["Beli disini https://shopee.co.id/Bubur-Manado-Tinutuan-i.113997688.4942116338?sp_atk=9c09af3a-9180-444b-b77b-a7d935ddda98&xptdk=9c09af3a"],
            "context": [""]
        },
        {
            "tag": "mie gomak",
            "inputs": ["mie gomak"],
            "responses": ["\n.1 mie lidi \n2. seari \n3. daun jeruk \n4. daging sapi \n5. susu \n6. santan \n7. kaldu sapi \n8. bungan kecombrang \n9. andaliman \n10. daun bawang \n11. tomat \n12. minyak \n13. bawang merah \n14. cabai rawit merah \n15. cabai merah keriting \n16. bawang putih \n17. kunyit \n18. jahe \nKamu bisa menonton video tutorial membuat mie gomak disini https://www.youtube.com/watch?v=mIVTjdH8ZKE&vl=id, \nKamu juga bisa mengunjungi toko online yang menjual mie gomak, jika anda tertarik ketik 'beli mie gomak', jika tidak ketik 'tidak'"],
            "context": [""]
        },
        {
            "tag": "beli38",
            "inputs": ["beli mie"],
            "responses": ["Beli disini https://www.tokopedia.com/rekomendasi/1698652453?ref=googleshopping&c=16956930613&m=409727453&p=1698652453&gclid=EAIaIQobChMI9YOGr-ft9wIVvZpmAh1x9wb9EAQYBSABEgIce_D_BwE&gclsrc=aw.ds"],
            "context": [""]
        }

    ]
}
