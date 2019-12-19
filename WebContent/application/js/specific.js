
//------ EXEC BATCH AT USER CREATION ------------------
var g_execbatch = true;
var g_execbatchbuttonlabel1 = [];
	g_execbatchbuttonlabel1['fr'] = "Patience! Création de votre portfolio ...";
var g_json = {};

//=======================
function prepareBatch()
//=======================
{
	// ---- global variables ---------
	g_json['model_code'] = "modeles-cnam.batch-creation";
	// ---- local variables ---------
	g_json['lines'] = [];
	g_json.lines[0] =
	{
		"auditeurCourriel" : USER.email,
		"auditeurNomFamille" : USER.lastname,
		"auditeurPrenom" : USER.firstname,
	};
}//----------------------------------------------------
