<?php
namespace Index\Helper;

defined('ACCESS_FILE') or exit('No direct script access allowed');
class Response
{
    protected $tpl;
    //
    public function resrule($data)
    {
        $this->tpl='';
        if (!is_array($data)) {
            return '<h1>不好意思模板出错了</h1>';
        }
        $this->tpl = file_get_contents(TPL_PATH."/header.php");

        $this->tpl.='<!--https://wenku.baidu.com/view/bd29b7b3fd0a79563c1e72f7.html-->
        <div class="page-header">
            <h1>规则集</h1>
        </div>
        <div class="row">
            <div class="col-md-4">
                <div class="panel panel-primary">
                    <div class="panel-heading">
                        <h3 class="panel-title">随便写写</h3>
                    </div>
                    <div class="panel-body">'.$data['iconv_error'].'
                    </div>
                </div>
            </div>';

        $this->tpl.='
            <div class="col-md-4">
                <div class="panel panel-primary">
                    <div class="panel-heading">
                        <h3 class="panel-title">...</h3>
                    </div>
                    <div class="panel-body">';
        // foreach ($data['character_set'] as $val) {
        //     $this->tpl.=$val;
        // }

        $this->tpl.='</div>
                </div>
            </div>';
        $this->tpl.='
            <div class="col-md-4">
                <div class="panel panel-primary">
                    <div class="panel-heading">
                        <h3 class="panel-title">...</h3>
                    </div>
                    <div class="panel-body">';
        // foreach ($data['coll_set'] as $val) {
        //     $this->tpl.=$val;
        // }
        $this->tpl.='</div>
                </div>
            </div>
        </div>';
        $this->tpl.=
        '<div class="page-header">
            <h1>数据区域</h1>
        </div>
        <div class="row">
            <div class="col-md-6">
                <table class="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>消息标题</th>
                            <th>消内内容</th>
                        </tr>
                    </thead>
                    <tbody>';
        if (is_array($data['rules']) && !empty($data['rules'])) {
            foreach ($data['rules'] as $val) {
                $this->tpl.='<tr>'.
                '<td>'.explode(':', $val)[0].'</td>'.
                '<td>'.explode(':', $val)[1].'</td>'.
                '<td>'.explode(':', $val)[2].'</td>'
                .'</tr>';
            }
        }
        $this->tpl.='</tbody>
                </table>
            </div>';
        $this->tpl.='<br><div class="col-md-6">
                <ul class="list-group">
                    <li class="list-group-item">'.$data['sqli'].'</li>
                    <li class="list-group-item">'.$data['your_param'].'</li>
                    <li class="list-group-item">'.$data['get_error'].'</li>
                </ul>
            </div>';
        $this->tpl.='</div>';
        $this->tpl.='
            <div class="row">
                <div class="col-md-6">
                    <form role="form" onsubmit="return false;">
                        <div class="form-group">
                            <label for="name">消息名:</label>
                            <input id="name" type="name" class="form-control" placeholder="...">
                        </div>
                        <div class="form-group">
                            <label for="value">消息内容:</label>
                            <input type="value" id="value" class="form-control" placeholder="...">
                        </div>
                        <button class="btn btn-block btn-primary" onclick = "rule_do();">
                            提交
                        </button>
                    </form>
                </div>
            </div>';
        return $this->tpl .= file_get_contents(TPL_PATH."/footer.php");
    }

    public function resdefault($data)
    {
        $this->tpl='';
        if (!is_array($data)) {
            return '不好意思模板出错了';
        }

        $this->tpl=<<<EOT
<!DOCTYPE html>
<html lang="zh-CH">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>default</title>
</head>
<body>

EOT;
        foreach ($data as $val) {
            $this->tpl.=$val;
        }
        $this->tpl.=<<<EOT
</body>
</html>
EOT;
        return $this->tpl;
    }

    public function getIndex()
    {
        $this->tpl = '';
        $this->tpl = file_get_contents(TPL_PATH."/index.php");
        return $this->tpl;
    }

    protected function resdef($data)
    {
        $this->tpl = '';
        $this->tpl = file_get_contents(TPL_PATH."/header.php");
        $this->tpl .=is_string($data)?$data:'';
        $this->tpl .= file_get_contents(TPL_PATH."/footer.php");
        return $this->tpl;
    }



    public function resjust($data)
    {
        $this->tpl = '';
        // var_dump($data);
        $this->tpl='<div class="page-header">
            <h1>Panels</h1>
        </div>
        <div class="row">
            <div class="col-md-12">
            <div class="panel panel-primary">
                <div class="panel-heading">
                <h3 class="panel-title">Panel title</h3>
                </div>
                <div class="panel-body">';
        if (is_array($data)) {
            foreach ($data as $key=>$val) {
                // var_dump($val);
                $this->tpl.='type : name : class -- '.$val['type'].':'.$val['name'].':'.$val['class'].'<br>';
            }
        }
        $this->tpl.='</div>
            </div>
        </div>';
        return $this->resdef($this->tpl);
    }

    //



    protected function arr_foreach($arr)
    {
        if (!is_array($arr)) {
            return false;
        }
        foreach ($arr as $key => $val) {
            if (is_array($val)) {
                $this->arr_foreach($val);
            } else {
                echo $val.'<br/>';
            }
        }
    }
}
