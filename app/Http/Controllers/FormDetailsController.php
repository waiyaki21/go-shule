<?php

namespace App\Http\Controllers;

use App\Models\SchoolType;
use App\Models\SchoolWard;
use App\Models\SchoolLevel;
use App\Models\SchoolCounty;
use Illuminate\Http\Request;
use GuzzleHttp\Psr7\Response;
use App\Models\SchoolLanguages;
use App\Models\SchoolSubCounty;
use Illuminate\Contracts\View\View;
use PhpParser\Node\Expr\Cast\Array_;
use App\Models\SchoolEducationSystem;

class FormDetailsController extends Controller
{
    public function addInfo() {
        // get type counts 
        $types = SchoolType::count();

        if ($types == 0) {
            // create school types 
            $type1 = new SchoolType();
            $type1->description = "Public School";
            $type1->save();

            $type2 = new SchoolType();
            $type2->description = "Private School";
            $type2->save();

            $type3 = new SchoolType();
            $type3->description = "Special needs-Public School";
            $type3->save();

            $type4 = new SchoolType();
            $type4->description = "Special needs-Private School";
            $type4->save();
        }

        // get counties
        $counties = SchoolCounty::count();

        if ($counties == 0) {

            $counties_array = [
                ["id" => 1,  "code" =>'1', "county_name" => 'Mombasa'],
                ["id" => 2,  "code" =>'2', "county_name" => 'Kwale'],
                ["id" => 3,  "code" =>'3', "county_name" => 'Kilifi'],
                ["id" => 4,  "code" =>'4', "county_name" => 'Tana River'],
                ["id" => 5,  "code" =>'5', "county_name" => 'Lamu'],
                ["id" => 6,  "code" =>'6', "county_name" => 'Taita Taveta'],
                ["id" => 7,  "code" =>'7', "county_name" => 'Garissa'],
                ["id" => 8,  "code" =>'8', "county_name" => 'Wajir'],
                ["id" => 9,  "code" =>'9', "county_name" => 'Mandera'],
                ["id" => 10, "code" => '10', "county_name" => 'Marsabit'],
                ["id" => 11, "code" => '11', "county_name" => 'Isiolo'],
                ["id" => 12, "code" => '12', "county_name" => 'Meru'],
                ["id" => 13, "code" => '13', "county_name" => 'Tharaka-Nithi'],
                ["id" => 14, "code" => '14', "county_name" => 'Embu'],
                ["id" => 15, "code" => '15', "county_name" => 'Kitui'],
                ["id" => 16, "code" => '16', "county_name" => 'Machakos'],
                ["id" => 17, "code" => '17', "county_name" => 'Makueni'],
                ["id" => 18, "code" => '18', "county_name" => 'Nyandarua'],
                ["id" => 19, "code" => '19', "county_name" => 'Nyeri'],
                ["id" => 20, "code" => '20', "county_name" => 'Kirinyaga'],
                ["id" => 21, "code" => '21', "county_name" => 'Muranga'],
                ["id" => 22, "code" => '22', "county_name" => 'Kiambu'],
                ["id" => 23, "code" => '23', "county_name" => 'Turkana'],
                ["id" => 24, "code" => '24', "county_name" => 'West Pokot'],
                ["id" => 25, "code" => '25', "county_name" => 'Samburu'],
                ["id" => 26, "code" => '26', "county_name" => 'Trans-Nzoia'],
                ["id" => 27, "code" => '27', "county_name" => 'Uasin Gishu'],
                ["id" => 28, "code" => '28', "county_name" => 'Elgeyo-Marakwet'],
                ["id" => 29, "code" => '29', "county_name" => 'Nandi'],
                ["id" => 30, "code" => '30', "county_name" => 'Baringo'],
                ["id" => 31, "code" => '31', "county_name" => 'Laikipia'],
                ["id" => 32, "code" => '32', "county_name" => 'Nakuru'],
                ["id" => 33, "code" => '33', "county_name" => 'Narok'],
                ["id" => 34, "code" => '34', "county_name" => 'Kajiado'],
                ["id" => 35, "code" => '35', "county_name" => 'Kericho'],
                ["id" => 36, "code" => '36', "county_name" => 'Bomet'],
                ["id" => 37, "code" => '37', "county_name" => 'Kakamega'],
                ["id" => 38, "code" => '38', "county_name" => 'Vihiga'],
                ["id" => 39, "code" => '39', "county_name" => 'Bungoma'],
                ["id" => 40, "code" => '40', "county_name" => 'Busia'],
                ["id" => 41, "code" => '41', "county_name" => 'Siaya'],
                ["id" => 42, "code" => '42', "county_name" => 'Kisumu'],
                ["id" => 43, "code" => '43', "county_name" => 'Homa Bay'],
                ["id" => 44, "code" => '44', "county_name" => 'Migori'],
                ["id" => 45, "code" => '45', "county_name" => 'Kisii'],
                ["id" => 46, "code" => '46', "county_name" => 'Nyamira'],
                ["id" => 47, "code" => '47', "county_name" => 'Nairobi']
            ];

            foreach ($counties_array as $index => $county) {
            //     # new county
                SchoolCounty::create([
                    'code'          =>  $county['code'],
                    'county_name'   =>  $county['county_name']
                ]);
            }
        }

        // get levels
        $levels = SchoolLevel::count();

        if ($levels == 0) {

            $levels_array = [
                ["id" => 1,  "description" => 'Pre school'],
                ["id" => 2,  "description" => 'Grade school'],
                ["id" => 3,  "description" => 'High School'],
                ["id" => 4,  "description" => 'Pre school And Grade School'],
                ["id" => 5,  "description" => 'Grade School And High School'],
                ["id" => 6,  "description" => 'Pre school And High School'],
                ["id" => 7,  "description" => 'Pre school, Grade School And High School'],
                ["id" => 8,  "description" => 'Technical And Vocational Education Training Centers'],
            ];  

            foreach ($levels_array as $index => $level) {
                //     # new level
                SchoolLevel::create([
                    'description'          =>  $level['description'],
                ]);
            }
        }

        //get systems
        $systems = SchoolEducationSystem::count();

        if ($systems == 0) {

            $systems_array = [
                ["id" => 1,  "description" => 'Competency Based Curriculum'],
                ["id" => 2,  "description" => 'British National Curriculum'],
                ["id" => 3,  "description" => 'American National Curriculum'],
                ["id" => 4,  "description" => 'International Baccalaureate'],
                ["id" => 5,  "description" => 'Others'],
            ];

            foreach ($systems_array as $index => $system) {
                //     # new sys
                SchoolEducationSystem::create([
                    'description'          =>  $system['description'],
                ]);
            }
        }

        // get levels
        $levels = SchoolLevel::count();

        if ($levels == 0) {

            $levels_array = [
                ["id" => 1,  "description" => 'Pre school'],
                ["id" => 2,  "description" => 'Grade school'],
                ["id" => 3,  "description" => 'High School'],
                ["id" => 4,  "description" => 'Pre school And Grade School'],
                ["id" => 5,  "description" => 'Grade School And High School'],
                ["id" => 6,  "description" => 'Pre school And High School'],
                ["id" => 7,  "description" => 'Pre school, Grade School And High School'],
                ["id" => 8,  "description" => 'Technical And Vocational Education Training Centers'],
            ];

            foreach ($levels_array as $index => $level) {
                //     # new level
                SchoolLevel::create([
                    'description'          =>  $level['description'],
                ]);
            }
        }

        //get sub-county
        $subcounties = SchoolSubCounty::count();

        if ($subcounties == 0) {

            $subcounties_array = [
                ["name" => 'Likoni', "county_id" => '1'],
                ["name" => 'Mombasa', "county_id" => '1'],
                ["name" => 'Nyali', "county_id" => '1'],
                ["name" => 'Kisauni', "county_id" => '1'],
                ["name" => 'Changamwe', "county_id" => '1'],
                ["name" => 'Jomvu', "county_id" => '1'],
                ["name" => 'Matuga', "county_id" => '2'],
                ["name" => 'Kinango', "county_id" => '2'],
                ["name" => 'LungaLunga', "county_id" => '2'],
                ["name" => 'Msambweni', "county_id" => '2'],
                ["name" => 'Ganze', "county_id" => '3'],
                ["name" => 'Rabai', "county_id" => '3'],
                ["name" => 'Malindi', "county_id" => '3'],
                ["name" => 'Kaloleni', "county_id" => '3'],
                ["name" => 'Magarini', "county_id" => '3'],
                ["name" => 'Kilifi north', "county_id" => '3'],
                ["name" => 'Kilifi south', "county_id" => '3'],
                ["name" => 'Tana River', "county_id" => '4'],
                ["name" => 'Tana delta', "county_id" => '4'],
                ["name" => 'Tana North', "county_id" => '4'],
                ["name" => 'Lamu East', "county_id" => '5'],
                ["name" => 'Lamu West', "county_id" => '5'],
                ["name" => 'Voi', "county_id" => '6'],
                ["name" => 'Taita', "county_id" => '6'],
                ["name" => 'Taveta', "county_id" => '6'],
                ["name" => 'Mwatate', "county_id" => '6'],
                ["name" => 'Garissa', "county_id" => '7'],
                ["name" => 'Lagdera', "county_id" => '7'],
                ["name" => 'Fafi', "county_id" => '7'],
                ["name" => 'Dadaab', "county_id" => '7'],
                ["name" => 'Ijara', "county_id" => '7'],
                ["name" => 'Hulugho', "county_id" => '7'],
                ["name" => 'Balambala', "county_id" => '7'],
                ["name" => 'Wajir East', "county_id" => '8'],
                ["name" => 'Wajir North', "county_id" => '8'],
                ["name" => 'Wajir South', "county_id" => '8'],
                ["name" => 'Wajir West', "county_id" => '8'],
                ["name" => 'Eldas', "county_id" => '8'],
                ["name" => 'Buna', "county_id" => '8'],
                ["name" => 'Tarbaj', "county_id" => '8'],
                ["name" => 'Habaswein', "county_id" => '8'],
                ["name" => 'Mandera East', "county_id" => '9'],
                ["name" => 'Lafey', "county_id" => '9'],
                ["name" => 'Mandera West', "county_id" => '9'],
                ["name" => 'Mandera Central', "county_id" => '9'],
                ["name" => 'Mandera North', "county_id" => '9'],
                ["name" => 'Banisa', "county_id" => '9'],
                ["name" => 'Kotulo', "county_id" => '9'],
                ["name" => 'Marsabit central', "county_id" => '10'],
                ["name" => 'Marsabit south /Laisamis', "county_id" => '10'],
                ["name" => 'Sololo', "county_id" => '10'],
                ["name" => 'North Horr', "county_id" => '10'],
                ["name" => 'Loyangalani', "county_id" => '10'],
                ["name" => 'Moyale', "county_id" => '10'],
                ["name" => 'Marsabit North / Chalbi', "county_id" => '10'],
                ["name" => 'Garbatulla', "county_id" => '11'],
                ["name" => 'Isiolo', "county_id" => '11'],
                ["name" => 'Merti', "county_id" => '11'],
                ["name" => 'Imenti North', "county_id" => '12'],
                ["name" => 'Buuri', "county_id" => '12'],
                ["name" => 'Meru central', "county_id" => '12'],
                ["name" => 'Imenti south', "county_id" => '12'],
                ["name" => 'Igembe North', "county_id" => '12'],
                ["name" => 'Igembe Central', "county_id" => '12'],
                ["name" => 'Igembe South', "county_id" => '12'],
                ["name" => 'Tigania east', "county_id" => '12'],
                ["name" => 'Tigania central', "county_id" => '12'],
                ["name" => 'Tigania West', "county_id" => '12'],
                ["name" => 'Maara', "county_id" => '13'],
                ["name" => 'Meru south', "county_id" => '13'],
                ["name" => 'Tharaka North', "county_id" => '13'],
                ["name" => 'Tharaka South', "county_id" => '13'],
                ["name" => 'Embu west', "county_id" => '14'],
                ["name" => 'Embu East', "county_id" => '14'],
                ["name" => 'Embu North', "county_id" => '14'],
                ["name" => 'Mbeere North', "county_id" => '14'],
                ["name" => 'Mbeere south', "county_id" => '14'],
                ["name" => 'Kitui Central', "county_id" => '15'],
                ["name" => 'Kisasi', "county_id" => '15'],
                ["name" => 'Mutitu', "county_id" => '15'],
                ["name" => 'Nzambani', "county_id" => '15'],
                ["name" => 'Kitui West', "county_id" => '15'],
                ["name" => 'Matinyani', "county_id" => '15'],
                ["name" => 'Mutomo', "county_id" => '15'],
                ["name" => 'Ikutha', "county_id" => '15'],
                ["name" => 'Migwani / Mwingi west', "county_id" => '15'],
                ["name" => 'Mwingi east', "county_id" => '15'],
                ["name" => 'Mwingi central', "county_id" => '15'],
                ["name" => 'Mumoni', "county_id" => '15'],
                ["name" => 'Tseikuru', "county_id" => '15'],
                ["name" => 'Kyuso', "county_id" => '15'],
                ["name" => 'Lower Yatta', "county_id" => '15'],
                ["name" => 'Katulani', "county_id" => '15'],
                ["name" => 'Machakos', "county_id" => '16'],
                ["name" => 'Athi River', "county_id" => '16'],
                ["name" => 'Kangundo', "county_id" => '16'],
                ["name" => 'Matungulu', "county_id" => '16'],
                ["name" => 'Kathiani', "county_id" => '16'],
                ["name" => 'Mwala', "county_id" => '16'],
                ["name" => 'Masinga', "county_id" => '16'],
                ["name" => 'Yatta', "county_id" => '16'],
                ["name" => 'Kibwezi', "county_id" => '17'],
                ["name" => 'Makindu', "county_id" => '17'],
                ["name" => 'Mbooni east', "county_id" => '17'],
                ["name" => 'Mbooni west', "county_id" => '17'],
                ["name" => 'Kilungu', "county_id" => '17'],
                ["name" => 'Mukaa', "county_id" => '17'],
                ["name" => 'Makueni', "county_id" => '17'],
                ["name" => 'Kathonzweni', "county_id" => '17'],
                ["name" => 'Nzaui', "county_id" => '17'],
                ["name" => 'Mirangine', "county_id" => '18'],
                ["name" => 'Nyandarua west', "county_id" => '18'],
                ["name" => 'Nyandarua south', "county_id" => '18'],
                ["name" => 'Kinangop', "county_id" => '18'],
                ["name" => 'Nyandarua central', "county_id" => '18'],
                ["name" => 'Kipipiri', "county_id" => '18'],
                ["name" => 'Nyandarua north', "county_id" => '18'],
                ["name" => 'Kieni East', "county_id" => '19'],
                ["name" => 'Nyeri central', "county_id" => '19'],
                ["name" => 'Nyeri south', "county_id" => '19'],
                ["name" => 'Mukurweini', "county_id" => '19'],
                ["name" => 'Mathira East', "county_id" => '19'],
                ["name" => 'Mathira West', "county_id" => '19'],
                ["name" => 'Tetu', "county_id" => '19'],
                ["name" => 'Kieni West', "county_id" => '19'],
                ["name" => 'Kirinyaga west', "county_id" => '20'],
                ["name" => 'Kirinyaga central', "county_id" => '20'],
                ["name" => 'Kirinyaga east', "county_id" => '20'],
                ["name" => 'Mwea west', "county_id" => '20'],
                ["name" => 'Mwea East', "county_id" => '20'],
                ["name" => 'Kahuro', "county_id" => '21'],
                ["name" => 'Kigumo', "county_id" => '21'],
                ["name" => 'Murang�a east', "county_id" => '21'],
                ["name" => 'Kandara', "county_id" => '21'],
                ["name" => 'Kangema', "county_id" => '21'],
                ["name" => 'Mathioya', "county_id" => '21'],
                ["name" => 'Gatanga', "county_id" => '21'],
                ["name" => 'Murang�a south', "county_id" => '21'],
                ["name" => 'Githunguri', "county_id" => '22'],
                ["name" => 'Ruiru', "county_id" => '22'],
                ["name" => 'Juja', "county_id" => '22'],
                ["name" => 'Limuru', "county_id" => '22'],
                ["name" => 'Lari', "county_id" => '22'],
                ["name" => 'Kiambaa', "county_id" => '22'],
                ["name" => 'Kiambu East', "county_id" => '22'],
                ["name" => 'Kikuyu', "county_id" => '22'],
                ["name" => 'Kabete', "county_id" => '22'],
                ["name" => 'Gatundu South', "county_id" => '22'],
                ["name" => 'Gatundu North', "county_id" => '22'],
                ["name" => 'Thika East', "county_id" => '22'],
                ["name" => 'Thika West', "county_id" => '22'],
                ["name" => 'Turkana central', "county_id" => '23'],
                ["name" => 'Turkana west', "county_id" => '23'],
                ["name" => 'Turkana south', "county_id" => '23'],
                ["name" => 'Turkana east', "county_id" => '23'],
                ["name" => 'Turkana north', "county_id" => '23'],
                ["name" => 'Loima', "county_id" => '23'],
                ["name" => 'Kibish', "county_id" => '23'],
                ["name" => 'Pokot central', "county_id" => '24'],
                ["name" => 'Pokot North', "county_id" => '24'],
                ["name" => 'Kipkomo', "county_id" => '24'],
                ["name" => 'Pokot South', "county_id" => '24'],
                ["name" => 'West Pokot', "county_id" => '24'],
                ["name" => 'Samburu central', "county_id" => '25'],
                ["name" => 'Samburu East', "county_id" => '25'],
                ["name" => 'Samburu North', "county_id" => '25'],
                ["name" => 'Trans Zoia west', "county_id" => '26'],
                ["name" => 'Kiminini', "county_id" => '26'],
                ["name" => 'Kwanza', "county_id" => '26'],
                ["name" => 'Endebess', "county_id" => '26'],
                ["name" => 'Trans Zoia east', "county_id" => '26'],
                ["name" => 'Eldoret west /Turbo', "county_id" => '27'],
                ["name" => 'Soy', "county_id" => '27'],
                ["name" => 'Eldoret east /Ainabkoi', "county_id" => '27'],
                ["name" => 'Moiben', "county_id" => '27'],
                ["name" => 'Kesses', "county_id" => '27'],
                ["name" => 'Eldoret south /Wareng (Kapsaret)', "county_id" => '27'],
                ["name" => 'Keiro North', "county_id" => '28'],
                ["name" => 'Keiyo South', "county_id" => '28'],
                ["name" => 'Marakwet West', "county_id" => '28'],
                ["name" => 'Marakwet East', "county_id" => '28'],
                ["name" => 'Chesumei', "county_id" => '29'],
                ["name" => 'Nandi central', "county_id" => '29'],
                ["name" => 'Tinderet', "county_id" => '29'],
                ["name" => 'Nandi East', "county_id" => '29'],
                ["name" => 'Nandi south (Aldai)', "county_id" => '29'],
                ["name" => 'Nandi north', "county_id" => '29'],
                ["name" => 'Marigat', "county_id" => '30'],
                ["name" => 'Baringo central', "county_id" => '30'],
                ["name" => 'Pokot East', "county_id" => '30'],
                ["name" => 'Baringo north', "county_id" => '30'],
                ["name" => 'Koibatek', "county_id" => '30'],
                ["name" => 'Mogotio', "county_id" => '30'],
                ["name" => 'Laikipia North', "county_id" => '31'],
                ["name" => 'Laikipia West', "county_id" => '31'],
                ["name" => 'Laikipia Central', "county_id" => '31'],
                ["name" => 'Laikipia East', "county_id" => '31'],
                ["name" => 'Nyahururu', "county_id" => '31'],
                ["name" => 'Naivasha', "county_id" => '32'],
                ["name" => 'Gilgil', "county_id" => '32'],
                ["name" => 'Kuresoi south', "county_id" => '32'],
                ["name" => 'Kuresoi North', "county_id" => '32'],
                ["name" => 'Molo', "county_id" => '32'],
                ["name" => 'Subukia', "county_id" => '32'],
                ["name" => 'Nakuru North', "county_id" => '32'],
                ["name" => 'Njoro', "county_id" => '32'],
                ["name" => 'Nakuru East', "county_id" => '32'],
                ["name" => 'Nakuru west', "county_id" => '32'],
                ["name" => 'Rongai', "county_id" => '32'],
                ["name" => 'Narok North', "county_id" => '33'],
                ["name" => 'Narok East', "county_id" => '33'],
                ["name" => 'Narok south', "county_id" => '33'],
                ["name" => 'Narok west', "county_id" => '33'],
                ["name" => 'Transmara west', "county_id" => '33'],
                ["name" => 'Transmara east', "county_id" => '33'],
                ["name" => 'Kajiado Central', "county_id" => '34'],
                ["name" => 'Kajiado East', "county_id" => '34'],
                ["name" => 'Kajiado South', "county_id" => '34'],
                ["name" => 'Kajiado North', "county_id" => '34'],
                ["name" => 'Kajiado west', "county_id" => '34'],
                ["name" => 'Kericho east', "county_id" => '35'],
                ["name" => 'Soin /Sigowet', "county_id" => '35'],
                ["name" => 'Kipkelion', "county_id" => '35'],
                ["name" => 'Belgut', "county_id" => '35'],
                ["name" => 'Bureti', "county_id" => '35'],
                ["name" => 'Londiani', "county_id" => '35'],
                ["name" => 'Bomet central', "county_id" => '36'],
                ["name" => 'Bomet East', "county_id" => '36'],
                ["name" => 'Konoin', "county_id" => '36'],
                ["name" => 'Chepalungu', "county_id" => '36'],
                ["name" => 'Sotik', "county_id" => '36'],
                ["name" => 'Khwisero', "county_id" => '37'],
                ["name" => 'Kakamega south', "county_id" => '37'],
                ["name" => 'Kakamega central', "county_id" => '37'],
                ["name" => 'Kakamega east', "county_id" => '37'],
                ["name" => 'Butere', "county_id" => '37'],
                ["name" => 'Mumias west', "county_id" => '37'],
                ["name" => 'Mumias east', "county_id" => '37'],
                ["name" => 'Kakamega north', "county_id" => '37'],
                ["name" => 'Lugari', "county_id" => '37'],
                ["name" => 'Matete', "county_id" => '37'],
                ["name" => 'Likuyani', "county_id" => '37'],
                ["name" => 'Matungu', "county_id" => '37'],
                ["name" => 'Navakholo', "county_id" => '37'],
                ["name" => 'Emuhaya', "county_id" => '38'],
                ["name" => 'Luanda', "county_id" => '38'],
                ["name" => 'Vihiga', "county_id" => '38'],
                ["name" => 'Sabatia', "county_id" => '38'],
                ["name" => 'Hamisi', "county_id" => '38'],
                ["name" => 'Bungoma south', "county_id" => '39'],
                ["name" => 'Bumula', "county_id" => '39'],
                ["name" => 'Kimilili', "county_id" => '39'],
                ["name" => 'Bungoma west', "county_id" => '39'],
                ["name" => 'Bungoma north', "county_id" => '39'],
                ["name" => 'Bungoma central', "county_id" => '39'],
                ["name" => 'Cheptais', "county_id" => '39'],
                ["name" => 'Mt Elgon', "county_id" => '39'],
                ["name" => 'Bungoma east', "county_id" => '39'],
                ["name" => 'Webuye west', "county_id" => '39'],
                ["name" => 'Busia', "county_id" => '40'],
                ["name" => 'Nambale', "county_id" => '40'],
                ["name" => 'Bunyala', "county_id" => '40'],
                ["name" => 'Samia', "county_id" => '40'],
                ["name" => 'Teso North', "county_id" => '40'],
                ["name" => 'Teso South', "county_id" => '40'],
                ["name" => 'Butula', "county_id" => '40'],
                ["name" => 'Gem', "county_id" => '41'],
                ["name" => 'Siaya', "county_id" => '41'],
                ["name" => 'Bondo', "county_id" => '41'],
                ["name" => 'Rarieda', "county_id" => '41'],
                ["name" => 'Ugenya', "county_id" => '41'],
                ["name" => 'Ugunja', "county_id" => '41'],
                ["name" => 'Kisumu west', "county_id" => '42'],
                ["name" => 'Seme', "county_id" => '42'],
                ["name" => 'Kisumu east', "county_id" => '42'],
                ["name" => 'Kisumu central', "county_id" => '42'],
                ["name" => 'Nyando', "county_id" => '42'],
                ["name" => 'Nyakach', "county_id" => '42'],
                ["name" => 'Muhoroni', "county_id" => '42'],
                ["name" => 'Homa bay', "county_id" => '43'],
                ["name" => 'Rangwe', "county_id" => '43'],
                ["name" => 'Ndhiwa', "county_id" => '43'],
                ["name" => 'Suba', "county_id" => '43'],
                ["name" => 'Mbita', "county_id" => '43'],
                ["name" => 'Rachuonyo south', "county_id" => '43'],
                ["name" => 'Rachuonyo east', "county_id" => '43'],
                ["name" => 'Rachuonyo north', "county_id" => '43'],
                ["name" => 'Rongo', "county_id" => '44'],
                ["name" => 'Uriri', "county_id" => '44'],
                ["name" => 'Kuria West', "county_id" => '44'],
                ["name" => 'Kuria East', "county_id" => '44'],
                ["name" => 'Suna East', "county_id" => '44'],
                ["name" => 'Suna West', "county_id" => '44'],
                ["name" => 'Nyatike', "county_id" => '44'],
                ["name" => 'Awendo', "county_id" => '44'],
                ["name" => 'Kisii central', "county_id" => '45'],
                ["name" => 'Kitutu central', "county_id" => '45'],
                ["name" => 'Marani', "county_id" => '45'],
                ["name" => 'Masaba south', "county_id" => '45'],
                ["name" => 'Nyamache', "county_id" => '45'],
                ["name" => 'Kenyenya', "county_id" => '45'],
                ["name" => 'Gucha', "county_id" => '45'],
                ["name" => 'Kisii south', "county_id" => '45'],
                ["name" => 'Gucha south', "county_id" => '45'],
                ["name" => 'Sameta', "county_id" => '45'],
                ["name" => 'Nyamira south', "county_id" => '46'],
                ["name" => 'Nyamira north', "county_id" => '46'],
                ["name" => 'Borabu', "county_id" => '46'],
                ["name" => 'Manga', "county_id" => '46'],
                ["name" => 'Masaba north', "county_id" => '46'],
                ["name" => 'Langata', "county_id" => '47'],
                ["name" => 'Kibra', "county_id" => '47'],
                ["name" => 'Westlands', "county_id" => '47'],
                ["name" => 'Starehe', "county_id" => '47'],
                ["name" => 'Mathare', "county_id" => '47'],
                ["name" => 'Kasarani', "county_id" => '47'],
                ["name" => 'Makadara', "county_id" => '47'],
                ["name" => 'Roysambu', "county_id" => '47'],
                ["name" => 'Kamukunji', "county_id" => '47'],
                ["name" => 'Ruaraka', "county_id" => '47'],
                ["name" => 'Dagoretti North', "county_id" => '47'],
                ["name" => 'Dagoretti South', "county_id" => '47'],
                ["name" => 'Embakasi South', "county_id" => '47'],
                ["name" => 'Embakasi North', "county_id" => '47'],
                ["name" => 'Embakasi Central', "county_id" => '47'],
                ["name" => 'Embakasi East', "county_id" => '47'],
                ["name" => 'Embakasi West', "county_id" => '47']
            ];

            foreach ($subcounties_array as $index => $subcounty) {
                //     # new sys
                SchoolSubCounty::create([
                    'name'          =>  $subcounty['name'],
                    'county_id'     =>  $subcounty['county_id'],
                ]);
            }
        }

        //get ward
        $wards = SchoolWard::count();

        if ($wards == 0) {

            $wards_array = [
                ["name" => 'Kitisuru', "subcounty_id" => '314'],
                ["name" => 'Parklands/Highridge', "subcounty_id" => '314'],
                ["name" => 'Kangemi', "subcounty_id" => '314'],
                ["name" => 'Karura', "subcounty_id" => '314'],
                ["name" => 'Mountain View', "subcounty_id" => '314'],
                ["name" => 'Kilimani', "subcounty_id" => '322'],
                ["name" => 'Kawangware', "subcounty_id" => '322'],
                ["name" => 'Gatina', "subcounty_id" => '322'],
                ["name" => 'Kileleshwa', "subcounty_id" => '322'],
                ["name" => 'Kabiro', "subcounty_id" => '322'],
                ["name" => 'Mutu-ini', "subcounty_id" => '323'],
                ["name" => 'Riruta', "subcounty_id" => '323'],
                ["name" => 'Uthiru/Ruthimitu', "subcounty_id" => '323'],
                ["name" => 'Waithaka', "subcounty_id" => '323'],
                ["name" => 'Karen', "subcounty_id" => '312'],
                ["name" => 'Nairobi West', "subcounty_id" => '312'],
                ["name" => 'Nyayo Highrise', "subcounty_id" => '312'],
                ["name" => 'South C', "subcounty_id" => '312'],
                ["name" => 'Laini Saba', "subcounty_id" => '313'],
                ["name" => 'Lindi', "subcounty_id" => '313'],
                ["name" => 'Makina', "subcounty_id" => '313'],
                ["name" => 'Woodley-Kenyatta Golf Course', "subcounty_id" => '313'],
                ["name" => 'Sarangombe', "subcounty_id" => '313'],
                ["name" => 'Githurai', "subcounty_id" => '319'],
                ["name" => 'Kahawa West', "subcounty_id" => '319'],
                ["name" => 'Zimmerman', "subcounty_id" => '319'],
                ["name" => 'Roysambu', "subcounty_id" => '319'],
                ["name" => 'Kahawa', "subcounty_id" => '319'],
                ["name" => 'Clay City', "subcounty_id" => '317'],
                ["name" => 'Mwiki', "subcounty_id" => '317'],
                ["name" => 'Kasarani', "subcounty_id" => '317'],
                ["name" => 'Njiru Shopping', "subcounty_id" => '317'],
                ["name" => 'Ruai', "subcounty_id" => '317'],
                ["name" => 'Babadogo', "subcounty_id" => '321'],
                ["name" => 'Utalii', "subcounty_id" => '321'],
                ["name" => 'Mathare North', "subcounty_id" => '321'],
                ["name" => 'Lucky Summer', "subcounty_id" => '321'],
                ["name" => 'Korogocho', "subcounty_id" => '321'],
                ["name" => 'Imara Daima', "subcounty_id" => '324'],
                ["name" => 'Kwa Njenga', "subcounty_id" => '324'],
                ["name" => 'Kwa Reuben', "subcounty_id" => '324'],
                ["name" => 'Pipeline', "subcounty_id" => '324'],
                ["name" => 'Kware', "subcounty_id" => '324'],
                ["name" => 'Kariobangi North', "subcounty_id" => '325'],
                ["name" => 'Dandora Area I', "subcounty_id" => '325'],
                ["name" => 'Dandora Area II', "subcounty_id" => '325'],
                ["name" => 'Dandora Area III', "subcounty_id" => '325'],
                ["name" => 'Dandora Area IV', "subcounty_id" => '325'],
                ["name" => 'Kayole North', "subcounty_id" => '326'],
                ["name" => 'Kayole NorthCentral', "subcounty_id" => '326'],
                ["name" => 'Kayole South', "subcounty_id" => '326'],
                ["name" => 'Komarock', "subcounty_id" => '326'],
                ["name" => 'Chokaa', "subcounty_id" => '326'],
                ["name" => 'Matopeni/Spring Valley', "subcounty_id" => '326'],
                ["name" => 'Upper Savanna', "subcounty_id" => '327'],
                ["name" => 'Lower Savanna', "subcounty_id" => '327'],
                ["name" => 'Embakasi', "subcounty_id" => '327'],
                ["name" => 'Utawala', "subcounty_id" => '327'],
                ["name" => 'Mihango', "subcounty_id" => '327'],
                ["name" => 'Umoja I', "subcounty_id" => '328'],
                ["name" => 'Umoja II', "subcounty_id" => '328'],
                ["name" => 'Mowlem', "subcounty_id" => '328'],
                ["name" => 'Kariobangi South', "subcounty_id" => '328'],
                ["name" => 'Maringo/Hamza', "subcounty_id" => '318'],
                ["name" => 'Viwandani', "subcounty_id" => '318'],
                ["name" => 'Harambee', "subcounty_id" => '318'],
                ["name" => 'Makongeni', "subcounty_id" => '318'],
                ["name" => 'Pumwani', "subcounty_id" => '320'],
                ["name" => 'Eastleigh North', "subcounty_id" => '320'],
                ["name" => 'Eastleigh South', "subcounty_id" => '320'],
                ["name" => 'Airbase', "subcounty_id" => '320'],
                ["name" => 'California', "subcounty_id" => '320'],
                ["name" => 'Nairobi Central', "subcounty_id" => '315'],
                ["name" => 'Ngara', "subcounty_id" => '315'],
                ["name" => 'Pangani', "subcounty_id" => '315'],
                ["name" => 'Ziwani/Kariokor', "subcounty_id" => '315'],
                ["name" => 'Landimawe', "subcounty_id" => '315'],
                ["name" => 'Nairobi South', "subcounty_id" => '315'],
                ["name" => 'Hospital', "subcounty_id" => '316'],
                ["name" => 'Mabatini', "subcounty_id" => '316'],
                ["name" => 'Huruma', "subcounty_id" => '316'],
                ["name" => 'Ngei', "subcounty_id" => '316'],
                ["name" => 'Mlango Kubwa', "subcounty_id" => '316'],
                ["name" => 'Kiamaiko', "subcounty_id" => '316'],
                ["name" => 'Ngando', "subcounty_id" => '323'],
                ["name" => 'Kitengela', "subcounty_id" => '217'],
                ["name" => 'Kenyawa Poka', "subcounty_id" => '217'],
                ["name" => 'Imaroror', "subcounty_id" => '217'],
                ["name" => 'Kaputei North', "subcounty_id" => '217'],
                ["name" => 'Oloosirkon Sholinke', "subcounty_id" => '217'],
                ["name" => 'Keikuku', "subcounty_id" => '218'],
                ["name" => 'Kimana', "subcounty_id" => '218'],
                ["name" => 'Rombo', "subcounty_id" => '218'],
                ["name" => 'Mbirikani or Eselen', "subcounty_id" => '218'],
                ["name" => 'Entonet or Lenkisi', "subcounty_id" => '218'],
                ["name" => 'Namanga', "subcounty_id" => '218'],
                ["name" => 'Mailua', "subcounty_id" => '218'],
                ["name" => 'Purko', "subcounty_id" => '216'],
                ["name" => 'Ildamat', "subcounty_id" => '216'],
                ["name" => 'Dalalekutuk', "subcounty_id" => '216'],
                ["name" => 'Matapato North', "subcounty_id" => '216'],
                ["name" => 'Matapato South', "subcounty_id" => '216'],
                ["name" => 'Olkeri', "subcounty_id" => '219'],
                ["name" => 'Ongata Rongai', "subcounty_id" => '219'],
                ["name" => 'Nkaimurunya', "subcounty_id" => '219'],
                ["name" => 'Oloolua', "subcounty_id" => '219'],
                ["name" => 'Ngong', "subcounty_id" => '219'],
                ["name" => 'Keekonyokie', "subcounty_id" => '220'],
                ["name" => 'Iloodokilani', "subcounty_id" => '220'],
                ["name" => 'Magadi', "subcounty_id" => '220'],
                ["name" => 'Ewuaso Oonkidongi', "subcounty_id" => '220'],
                ["name" => 'Mosiro', "subcounty_id" => '220']
            ];

            foreach ($wards_array as $index => $ward) {
                //     # new sys
                SchoolWard::create([
                    'name'          =>  $ward['name'],
                    'subcounty_id'  =>  $ward['subcounty_id'],
                ]);
            }
        }

        // get type counts 
        $languages = SchoolLanguages::count();

        if ($languages == 0) {
            // create languages 
            $languages_array = [
                ["id" => 1,  "name" => 'French'],
                ["id" => 2,  "name" => 'Chinese'],
                ["id" => 3,  "name" => 'German'],
                ["id" => 4,  "name" => 'Italian'],
                ["id" => 5,  "name" => 'Spanish'],
                ["id" => 6,  "name" => 'Arabic'],
                ["id" => 7,  "name" => 'Russian'],
                ["id" => 8,  "name" => 'Korean'],
                ["id" => 9,  "name" => 'Dutch'],
                ["id" => 10, "name" => 'Turkish'],
            ];

            foreach ($languages_array as $index => $language) {
                # new language
                SchoolLanguages::create([
                    'name'   =>  $language['name']
                ]);
            }
        }
    }

    public function getInfo() : Array {
        // get type counts 
        $types = SchoolType::get();

        //get systems
        $systems = SchoolEducationSystem::get();

        // get levels
        $levels = SchoolLevel::get();

        // get counties
        $counties = SchoolCounty::orderBy('county_name', 'desc')->get();

        // get subcounties 
        $subcounties = SchoolSubCounty::orderBy('name', 'desc')->get();

        // get wards 
        $wards = SchoolWard::orderBy('name', 'desc')->get();

        // get languages 
        $languages = SchoolLanguages::orderBy('name', 'desc')->get();

        return [$types, $levels, $systems, $counties, $subcounties, $wards, $languages];
    }

    public function getSubInfo(SchoolCounty $county): object
    {
        // get subcounties 
        $subcounties = SchoolSubCounty::where('county_id', $county->id)
                                        ->orderBy('name', 'desc')
                                        ->get();

        return $subcounties;
    }

    public function getWardsInfo(SchoolSubCounty $subcounty): object
    {
        // get wards 
        $wards = SchoolWard::where('subcounty_id', $subcounty->id)
                            ->orderBy('name', 'desc')
                            ->get();

        return $wards;
    }

    // post ward 
    public function storeWard(Request $request, SchoolSubCounty $subcounty) 
    {
        // validate 
        $request->validate([
            'name'          => 'required',
            'subcounty_id'  => 'required',
        ]);

        // create record 
        SchoolWard::create([
            'name'          => $request->name,
            'subcounty_id'  => $request->subcounty_id,
        ]);

        // flash 
        $message = 'Ward entered successfully!';

        return response()->json([null, 200, $message]);
    }
}